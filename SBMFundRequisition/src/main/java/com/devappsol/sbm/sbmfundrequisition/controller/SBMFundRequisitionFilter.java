package com.devappsol.sbm.sbmfundrequisition.controller;

import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URLDecoder;
import java.util.Properties;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.devappsol.sbm.sbmfundrequisition.model.UserRequest;
import com.devappsol.sbm.sbmfundrequisition.model.UserResponse;
import com.google.gson.Gson;

public class SBMFundRequisitionFilter implements Filter {

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		// TODO Auto-generated method stub

	}

	Properties prop = new Properties();
	InputStream input = null;

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		// TODO Auto-generated method stub
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		HttpServletResponse httpResponse = (HttpServletResponse) response;
		if (httpRequest.getMethod().equalsIgnoreCase("POST")) {
			String token = httpRequest.getHeader("Authorization");
			String email = httpRequest.getHeader("emailId");
			if ((token != null && !token.equals("")) && (email != null && !email.equals(""))) {
				HttpSession session = httpRequest.getSession(true);
				System.out.println("**************SBMPediaFilter****************");
				session.setAttribute("token", token);
				session.setAttribute("emailId", email);
				// String url = prop.get("validationURL").toString();
				String url = "http://localhost:8080/SBMUserManagement/userAccessValidation";
				// String url =
				// "http://183.82.144.250:8080/SBMUserManagement/userAccessValidation";
				// String url =
				// "http://www.swachhbharaturban.in:8080/SBMUserManagement/userAccessValidation";

				RestTemplate restTemplate = new RestTemplate();

				UserRequest sbmRequest = new UserRequest();
				sbmRequest.setToken(token);
				sbmRequest.setEmailId(email);
				sbmRequest.setModuleName("SBM Fund Requisition");

				String uri = httpRequest.getScheme() + "://" + httpRequest.getServerName()
						+ ("http".equals(httpRequest.getScheme()) && httpRequest.getServerPort() == 80
								|| "https".equals(request.getScheme()) && request.getServerPort() == 443 ? ""
										: ":" + request.getServerPort())
						+ httpRequest.getRequestURI()
						+ (httpRequest.getQueryString() != null ? "?" + httpRequest.getQueryString() : "");

				String queryString = httpRequest.getQueryString() != null ? httpRequest.getQueryString() : "";
				// logger.warn(queryString);
				queryString = URLDecoder.decode(queryString, "UTF-8");

				String[] abc = httpRequest.getRequestURI().split("/");

				/*
				 * if(abc[4].equalsIgnoreCase("read") ||
				 * abc[4].equalsIgnoreCase("dynamic")) {
				 * sbmRequest.setAction("READ"); } else
				 * if(abc[4].equalsIgnoreCase("create") ||
				 * abc[4].equalsIgnoreCase("add")) {
				 * sbmRequest.setAction("WRITE"); } else
				 * if(abc[4].equalsIgnoreCase("delete")) {
				 * sbmRequest.setAction("DELETE"); } else
				 * if(abc[4].equalsIgnoreCase("update")) {
				 * sbmRequest.setAction("UPDATE"); }
				 */

				if (abc[4].equalsIgnoreCase("master")) {
					sbmRequest.setToken(token);
					sbmRequest.setModuleName("SBM Fund Requisition Master");
					if (abc[5].equalsIgnoreCase("read") || abc[5].equalsIgnoreCase("dynamic")) {
						sbmRequest.setAction("READ");
					} else if (abc[5].equalsIgnoreCase("create") || abc[5].equalsIgnoreCase("add")) {
						sbmRequest.setAction("WRITE");
					} else if (abc[5].equalsIgnoreCase("delete")) {
						sbmRequest.setAction("DELETE");
					} else if (abc[5].equalsIgnoreCase("update")) {
						sbmRequest.setAction("UPDATE");
					}
				} else {
					sbmRequest.setToken(token);
					sbmRequest.setModuleName("SBM Fund Requisition");
					if (abc[4].equalsIgnoreCase("read") || abc[4].equalsIgnoreCase("dynamic")) {
						sbmRequest.setAction("READ");
					} else if (abc[4].equalsIgnoreCase("create") || abc[4].equalsIgnoreCase("add")) {
						sbmRequest.setAction("WRITE");
					} else if (abc[4].equalsIgnoreCase("delete")) {
						sbmRequest.setAction("DELETE");
					} else if (abc[4].equalsIgnoreCase("update")) {
						sbmRequest.setAction("UPDATE");
					}
				}

				HttpEntity<UserRequest> httpEntity = new HttpEntity<UserRequest>(sbmRequest);

				ResponseEntity<String> res = null;
				try {
					res = restTemplate.exchange(new URI(url), HttpMethod.POST, httpEntity, String.class);

					UserResponse respo = new Gson().fromJson(res.getBody(), UserResponse.class);

					if (respo.getStatus() != 1) {

						if (respo.getStatus() == -7) {
							respo.setMessage("You have logged in from other machine. Please Login again !");
							httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
						} else if (respo.getStatus() == 3) {
							respo.setMessage(
									"Your password has been not changed, Please change the password in the below link \n <a href=\"http://www.swachhbharaturban.in:8080/SBMUserManagement/user/login\">	http://www.swachhbharaturban.in:8080/SBMUserManagement/user/login </a>");
							httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
						} else {
							respo.setMessage("Do not have access to perform this action please contact to admin");
							httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
						}

						String json = new Gson().toJson(respo);
						httpResponse.setContentType("application/json");
						httpResponse.setCharacterEncoding("UTF-8");
						httpResponse.getWriter().write(json);
						return;

					}

					session.setAttribute("token", respo.getToken());
					session.setAttribute("emailId", respo.getEmailId());

				} catch (RestClientException e) {
					e.printStackTrace();
					// logger.warn("RestClientException during exchange", e);
				} catch (URISyntaxException e) {
					e.printStackTrace();
					// logger.warn("URISyntaxException during exchange", e);
				}
			} else {
				String[] abc = httpRequest.getRequestURI().split("/");
				if (abc[2].equals("form")) {
					chain.doFilter(httpRequest, httpResponse);
				}
				httpResponse.setStatus(httpResponse.SC_UNAUTHORIZED);
				return;
			}
		} else if (httpRequest.getMethod().equalsIgnoreCase("OPTIONS")) {
			chain.doFilter(httpRequest, httpResponse);
		} else {
			HttpSession session = httpRequest.getSession(true);
			String token = (String) session.getAttribute("Authorization");
			String email = (String) session.getAttribute("emailId");

			token = httpRequest.getHeader("Authorization");
			email = httpRequest.getHeader("emailId");

		}

		// pass the request along the filter chain
		chain.doFilter(httpRequest, httpResponse);
	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub

	}
}