package com.devappsol.sbm.sbmfundrequisition.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class EntryController {
			
			
			@RequestMapping(value = "/fundRequistion", method = RequestMethod.GET)
			public ModelAndView search(HttpServletResponse response) {
				
				try{
					Map<String, Object> model = new HashMap<String, Object>();
					return new ModelAndView("fundRequistion", model);
				} catch(Exception e) {
					e.printStackTrace();
					return null;
				}
			}
			
			@RequestMapping(value = "/masterScreen", method = RequestMethod.GET)
			public ModelAndView masterScreen(HttpServletResponse response) {
				
				try{
					Map<String, Object> model = new HashMap<String, Object>();
					return new ModelAndView("fundMasterData", model);
				} catch(Exception e) {
					e.printStackTrace();
					return null;
				}
			}

}
