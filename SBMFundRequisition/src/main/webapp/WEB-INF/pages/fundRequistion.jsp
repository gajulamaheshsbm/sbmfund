<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isELIgnored="false"%>

<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="">
<!--<![endif]-->

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title></title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/main.css">
<link rel="stylesheet" href="css/dataTables.responsive.css" />
<link rel="stylesheet" href="css/dataTables.bootstrap.css" />
<script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
</head>


<body>

	<header>

		<div class="container">
			<div class="row pull-right">
				<span id="welcomeReg" style="display: none;"><span
					id="welcomeName" style="color: #337ab7; text-decoration: none;">Welcome
						<%=session.getAttribute("userName")%></span></span> <span id="loginReg"><a
					href="#" id="loginName"><%=session.getAttribute("userName")%></a></span> <span
					id="logOut" style="display: inline; margin-left: 20px;"><a
					href="#"> Logout</a></span>
			</div>
			<div class="row mainheader">

				<div class="col-sm-3 col-md-2 hidden-xs">
					<img src="images/indian-gov.png" class="img-responsive" alt="">
				</div>
				<div class="col-sm-6 col-md-8 text-center">
					<h1>Swachh Bharat Urban</h1>
					<h4>Ministry of Urban Development</h4>
				</div>
				<div class="col-sm-3 col-md-2 hidden-xs">
					<img src="images/swachh.png" class="img-responsive" alt="">
				</div>
			</div>
		</div>
	</header>
	<!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
	<div class="navHeader">
		<div class="container" style="padding: 10px;">
			<div class="row">
				<!-- <div class="col-sm-6 col-xs-6">
					<a id="sbmHomeId"
						href="http://www.swachhbharaturban.in/sbm/home/#/SBM">Home</a>
				</div> -->
				<!-- <div class="col-sm-6  col-xs-6 text-right">
							<a href="http://49.206.0.188:9090/sbm_test/contentadmin/#/contentAdmin">Log Out</a>
						</div> -->
			</div>
			 <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li><a id="sbmHomeId" href="http://sbmtest.connect2go.in">Home</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Master Data <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="/SBMFundRequisition/masterScreen" id="masterscreenRef">ULB Master Data</a></li>
                            <li><a href="#" id="masterFinancialYear">ULB fininacial year</a></li>
                            <li><a href="#" id="masterULB">ULB Target Data</a></li>
                            <li><a href="#" id="masterSanitation">IHHL Center Share</a></li>
                            <li><a href="#" id="sanctionMaster">Sanction Master</a></li>
                            <li><a href="#" id="stateUtilizMaster">State Utilization Master</a></li>
                            </ul>
                    </li>
                    </ul>
                    
            </div>
		</div>
	</div>
	<div class="orange-bg">
		<!-- <section class="linksSection">
			<div class="container">
				<div class="row">
					<div class="col-sm-6 col-xs-6">
						<a id="sbmHomeId"
							href="http://49.206.0.188:9090/sbm_test/home/#/SBM">Home</a>
					</div>
					<div class="col-sm-6 col-xs-6">
							<a id="sbmHomeId" href="http://www.swachhbharaturban.in/sbm/home/#/SBM">Home</a>
						</div>
					<div class="col-sm-6  col-xs-6 text-right">
						<a
							href="http://49.206.0.188:9090/sbm_test/contentadmin/#/contentAdmin">Log
							Out</a>
					</div>
					<div class="col-sm-6  col-xs-6 text-right">
							<a href="http://www.swachhbharaturban.in/sbm/contentadmin/#/contentAdmin">Log Out</a>
						</div>
				</div>
			</div>
		</section> -->
		<div class="container content-header-bg">
			<div class="row">
				<div class="col-sm-6">
					<h2>View Proposal</h2>
				</div>
				<div class="col-sm-6 text-right">
					<p>
						<a class="btn btn-primary createProposal" href="#"
							data-toggle="modal" data-target="#myModal" role="button">Create
							Proposal</a>
					</p>
				</div>
			</div>
		</div>

		<div class="container content-bg">
			<!-- Example row of columns -->

			<div class="row">
				<div class="userstateName"></div>
				<div class="proposalTableview"></div>
				<!-- <div class="table-responsive">
					<table class="table table-striped">
						<colgroup>
							<col class="col-xs-3">
							<col class="col-xs-2">
							<col class="col-xs-2">
							<col class="col-xs-2">
							<col class="col-xs-2">
							<col class="col-xs-1">
						</colgroup>
						<thead>
							<tr>
								<th>Proposal Name</th>
								<th>Proposal Ref. No.</th>
								<th>Proposal Create Date</th>
								<th>Proposal Amount</th>
								<th>Status</th>
								<th class="text-right">Edit/View</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Proposal Name</td>
								<td>Proposal Ref. No.</td>
								<td>24/02/2017</td>
								<td>20,00,00,000</td>
								<td>Maharastra</td>
								<td class="text-right">
									<button class="btn btn-warning btn-rounded">
										<i class="glyphicon glyphicon-pencil"></i>
									</button>
									<button class="btn btn-success btn-rounded">
										<i class="glyphicon glyphicon-eye-open"></i>
									</button>
								</td>
							</tr>
							<tr>
								<td>Proposal Name</td>
								<td>Proposal Ref. No.</td>
								<td>24/02/2017</td>
								<td>20,00,00,000</td>
								<td>Maharastra</td>
								<td class="text-right">
									<button class="btn btn-warning btn-rounded">
										<i class="glyphicon glyphicon-pencil"></i>
									</button>
									<button class="btn btn-success btn-rounded">
										<i class="glyphicon glyphicon-eye-open"></i>
									</button>
								</td>
							</tr>
							<tr>
								<td>Proposal Name</td>
								<td>Proposal Ref. No.</td>
								<td>24/02/2017</td>
								<td>20,00,00,000</td>
								<td>Maharastra</td>
								<td class="text-right">
									<button class="btn btn-warning btn-rounded">
										<i class="glyphicon glyphicon-pencil"></i>
									</button>
									<button class="btn btn-success btn-rounded">
										<i class="glyphicon glyphicon-eye-open"></i>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div> -->
			</div>
		</div>
	</div>
	<footer>

		<div class="container">
			<div class="row">
				<div class="col-sm-12 text-center">

					<p>&copy; Copyrights 2017 | Swachh Bharat Urban</p>
				</div>
			</div>
		</div>

	</footer>
	<!-- <p>
		<a class="btn btn-primary" href="#" data-toggle="modal"
			data-target="#myModalSenction" role="button">Sanction</a>
	</p> -->
	<!-- Modal -->
	<div class="modal fade" id="myModalSenction" tabindex="-1"
		role="dialog" aria-labelledby="myModalSenction">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title" id="myModalLabel">Sanction</h4>
				</div>
				<form>
					<div class="modal-body">
						<div class="row">
							<div class="col-sm-12">
								<div id="rootwizard">
									<div class="navbar">
										<div class="navbar-inner">
											<div class="container-fluid">
												<div class="row">
													<ul class="nav nav-tabs nav-justified">
														<li class="sanTab1 active"><a href="#sanTab1"
															data-toggle="tab">IHHL Installment 1</a></li>
														<li class="sanTab2"><a href="#sanTab2"
															data-toggle="tab">IHHL Installment 2</a></li>
														<li class="sanTab3"><a href="#sanTab3"
															data-toggle="tab">CT/PT</a></li>
														<li class="sanTab4"><a href="#sanTab4"
															data-toggle="tab">SWM Installment 1</a></li>
															<li class="sanTab5"><a href="#sanTab5"
															data-toggle="tab">SWM Installment 2</a></li>
														<li class="sanTab6"><a href="#sanTab6"
															data-toggle="tab">IEC</a></li>
														<li class="sanTab7"><a href="#sanTab7"
															data-toggle="tab">CB & AOE</a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div class="tab-content">
										<div class="tab-pane active" id="sanTab1">
											<div class="row">
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Head</label> <input type="text"
															name="" class="form-control sanihhl1ProposalHead"
															disabled="disabled">
													</div>
												</div> -->
												
												<div class="row">
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Physical Target(5year)</label> <input
															type="text" name="" class="form-control sanihhl15yearTarget"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Sanctioned Amount (cr)</label> <input
															type="text" name="" class="form-control saniHHL1TSAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Utilization (cr)</label> <input
															type="text" name=""
															class="form-control saniHHL1TotalUtilization"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4 col-sm-offset-4">
													<div class="form-group">
														<label for="">Last Sanctions Amount (cr)</label> <input
															type="text" name=""
															class="form-control sanihhl1LastSanction"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Utilized Amount (cr)</label> <input
															type="text" name=""
															class="form-control sanihhl1UtilizedFunds"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name="" class="form-control sanihhl1PTPAmount">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Financial Target (cr)</label> <input
															type="text" name="" class="form-control sanihh1TPAAmount">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control sanihhl1RequestAmount">
													</div>
												</div>
												<div class="col-sm-12">
													<div class="form-group">
														<label for="">Remarks</label>
														<textarea class="form-control saniHHL1Remarks" rows="4"></textarea>
													</div>
												</div>
												
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Physical Target(5year)</label> <input
															type="text" name=""
															class="form-control sanihhl15yearTarget"
															disabled="disabled" value="300">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Sanctioned Amount (cr)</label> <input
															type="text" name="" class="form-control saniHHL1TSAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Utilization (cr)</label> <input
															type="text" name=""
															class="form-control saniHHL1TotalUtilization"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Sanctions Amount (cr)</label> <input
															type="text" name=""
															class="form-control sanihhl1LastSanction"
															disabled="disabled" value="35">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Utilized Amount (cr)</label> <input
															type="text" name=""
															class="form-control sanihhl1UtilizedFunds"
															disabled="disabled" value="20">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name=""
															class="form-control sanihhl1PTPAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Financial Target (cr)</label> <input
															type="text" name="" class="form-control sanihh1TPAAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control sanihhl1RequestAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="deal">Financial Year</label> <input
															type="text" name=""
															class="form-control sanihhl1financialYear"
															disabled="disabled">
													</div>
												</div> -->
												<div class="clearfix"></div>
												<div class="col-sm-12">
													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">SHPC Doucuments</h3>
														</div>
														<div class="panel-body shpcDocs">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- 	<img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>

													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">Detailed Proposal</h3>
														</div>
														<div class="panel-body ihhl1actionPlanDocs">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>




													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">UC Certificate</h3>
														</div>
														<div class="panel-body ihhl1ucCertificateDoc">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>
													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">Progress Photos</h3>
														</div>
														<div class="panel-body ihhl1progressPhotoDoc">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>

													<!-- <div class="panel panel-default sanfinancialDiv"
									style="display: none;">
									<div class="panel-heading">
										<h3 class="panel-title">Financial IHHL Constructed
											Progress</h3>
									</div>
									<div class="panel-body financialProgressDoc">
										<div class="form-group">

											<div class="clearfix"></div>
											<div class="col-sm-2">
												<img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p>
											</div>
											
										</div>


									</div>
								</div> -->
												</div>

											</div>
										</div>
										</div>
										<div class="tab-pane" id="sanTab2">
											<div class="row">
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Head</label> <input type="text"
															name="" class="form-control sanihhl2ProposalHead"
															disabled="disabled">
													</div>
												</div> -->
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Physical Target(5year)</label> <input
															type="text" name=""
															class="form-control sanihhl25yearTarget"
															disabled="disabled" value="300">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Sanctioned Amount (cr)</label> <input
															type="text" name="" class="form-control saniHHL2TSAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Utilization (cr)</label> <input
															type="text" name=""
															class="form-control saniHHL2TotalUtilization"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">IHHL Installment 1</label> <input
															type="text" name=""
															class="form-control sanihhl2ihhl1"
															disabled="disabled" value="35">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Sanctions Amount (cr)</label> <input
															type="text" name=""
															class="form-control sanihhl2LastSanction"
															disabled="disabled" value="35">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Utilized Amount (cr)</label> <input
															type="text" name=""
															class="form-control sanihhl2UtilizedFunds"
															disabled="disabled" value="20">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name=""
															class="form-control sanihhl2PTPAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Financial Target (cr)</label> <input
															type="text" name=""
															class="form-control sanihhl2TPAAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control sanihhl2RequestAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="deal">Financial Year</label> <input
															type="text" name=""
															class="form-control sanihhl2financialYear"
															disabled="disabled">
													</div>
												</div>
												<div class="clearfix"></div>
												<div class="col-sm-12">
													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">SHPC Doucuments</h3>
														</div>
														<div class="panel-body shpcDocs">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- 	<img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>


													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">Action Plan</h3>
														</div>
														<div class="panel-body ihhl2actionPlanDocs">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>


													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">UC Certificate</h3>
														</div>
														<div class="panel-body ihhl2ucCertificateDoc">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>
													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">Progress Photos</h3>
														</div>
														<div class="panel-body ihhl2progressPhotoDoc">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>

													<div class="panel panel-default sanfinancialDiv">
														<div class="panel-heading">
															<h3 class="panel-title">Financial IHHL Constructed
																Progress</h3>
														</div>
														<div class="panel-body financialProgressDoc">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>
												</div>

											</div>
										</div>
										<div class="tab-pane" id="sanTab3">
											<div class="row">
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Head</label> <input type="text"
															name="" class="form-control sanctptProposalHead"
															disabled="disabled">
													</div>
												</div> -->
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Physical Target(5year)</label> <input
															type="text" name="" class="form-control sanctptTotalTarget"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Sanctioned Amount (cr)</label> <input
															type="text" name="" class="form-control sanctptTSAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Utilization (cr)</label> <input
															type="text" name=""
															class="form-control sanctptTotalUtilization"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Financial Target (cr)</label> <input
															type="text" name="" class="form-control sancTPTtpAoumnt"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group ">
														<label for="">Last Sanctions Amount (cr)</label> <input
															type="text" name=""
															class="form-control sanctptLastSanAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Utilized Amount (cr)</label> <input
															type="text" name=""
															class="form-control sancTPTProposedUtilizedFunds"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="deal">Financial Year</label> <input
															type="text" name=""
															class="form-control sanctptfinancialYear"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-12">
													<div class="form-group">
														<label for="">Description</label>
														<textarea class="form-control sancTPTDescription" rows="4"></textarea>
													</div>
												</div>
												<div class="col-sm-4 col-sm-offset-4">
													<div class="form-group">
														<label for="">Total Project Cost (cr)</label> <input
															type="text" name=""
															class="form-control sancTPTtotalProjectCost">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name="" class="form-control sancTPTptpAmount">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control sanctptCentralAssiatance">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">State Contribution (cr)</label> <input
															type="text" name=""
															class="form-control sanctptStateContribution">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Others (cr)</label> <input type="text"
															name="" class="form-control sanctptOthers">
													</div>
												</div>
												<div class="clearfix"></div>
												<div class="col-sm-12">
													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">SHPC Doucuments</h3>
														</div>
														<div class="panel-body shpcDocs">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- 	<img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>


													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">Action Plan</h3>
														</div>
														<div class="panel-body ctptactionPlanDocs">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>




													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">UC Certificate</h3>
														</div>
														<div class="panel-body ctptucCertificateDoc">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>
													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">Progress Photos</h3>
														</div>
														<div class="panel-body ctptprogressPhotoDoc">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>


												</div>

											</div>
										</div>
										<div class="tab-pane" id="sanTab4">
											<div class="row">
												<div class="row">
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Physical Target(5year)</label> <input
															type="text" name="" class="form-control swmTotalTarget"
															disabled="disabled">
													</div>
												</div> -->
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Sanctioned Amount (cr)</label> <input
															type="text" name="" class="form-control sanswmTSAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Utilization (cr)</label> <input
															type="text" name=""
															class="form-control sanswmTotalUtilization"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Financial Target (cr)</label> <input
															type="text" name="" class="form-control sanswmtpAoumnt"
															disabled="disabled">

													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Sanctions Amount (cr)</label> <input
															type="text" name="" class="form-control sanswmLastSanAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Utilized Amount (cr)</label> <input
															type="text" name=""
															class="form-control sanswmProposedUtilizedFunds"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="deal">Financial Year</label> <input
															type="text" name=""
															class="form-control sanswmfinancialYear"
															disabled="disabled">
													</div>
												</div> 
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name="" class="form-control swmptpAmount">
													</div>
												</div> -->
											</div>
											<div class="well well-dark card">
												<h4>Sub Project Details</h4>
												<div class="subProDetailsdiv">
													<div class="row">
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Sub Project Name (cr)</label> <input
																	type="text" name=""
																	class="form-control sanswmSubProjectName">
															</div>
														</div>
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Project Description</label>
																<textarea class="form-control sanswmdescription" rows="4"></textarea>
															</div>
														</div>
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Sub Project Cost (cr)</label> <input
																	type="text" name=""
																	class="form-control sanswmtotalProjectCost">
															</div>
														</div>
													</div>
													<div class="row">
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Central Assistance (cr)</label> <input
																	type="text" name=""
																	class="form-control sanswmCentralAssiatance">
															</div>
														</div>
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">State Contribution (cr)</label> <input
																	type="text" name=""
																	class="form-control sanswmStateContribution">
															</div>
														</div>
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Others (cr)</label> <input type="text"
																	name="" class="form-control sanswmOthers">
															</div>
														</div>
													</div>
												</div>
												<div class="row">
													<div
														class="btn btn-success btn-rounded sanswmaddSubProject pull-right">
														<i class="glyphicon glyphicon-plus"
															style="margin-top: 20%;"></i>
													</div>
												</div>
											</div>
											</div>
											<div class="row">
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Project Cost (cr)</label> <input
															type="text" name="" class="form-control sanswmGrandTotal">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control sanswmGrandCentralAssisTotal">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total State Contribution (cr)</label> <input
															type="text" name=""
															class="form-control sanswmGrandStateContriTotal">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Others Cost (cr)</label> <input
															type="text" name=""
															class="form-control sanswmGrandOthersCostTotal">
													</div>
												</div>
											</div>
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Physical Target(5year)</label> <input
															type="text" name=""
															class="form-control sanswm5yearTarget"
															disabled="disabled" value="300">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Sanctioned Amount (cr)</label> <input
															type="text" name="" class="form-control sanswmTsAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Utilization (cr)</label> <input
															type="text" name=""
															class="form-control sanswmTTotalUtilization"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Sanctions Amount (cr)</label> <input
															type="text" name=""
															class="form-control sanswmLastSanction"
															disabled="disabled" value="35">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Utilized Amount (cr)</label> <input
															type="text" name=""
															class="form-control sanswmUtilizedFunds"
															disabled="disabled" value="20">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name="" class="form-control sanswmPTPAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Financial Target (cr)</label> <input
															type="text" name="" class="form-control sanswmTPAAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control sanswmRequestAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="deal">Financial Year</label> <input
															type="text" name=""
															class="form-control sanswmfinancialYear"
															disabled="disabled">
													</div>
												</div> -->
												<div class="clearfix"></div>
												<div class="col-sm-12">
													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">SHPC Doucuments</h3>
														</div>
														<div class="panel-body shpcDocs">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- 	<img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>

													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">Action Plan</h3>
														</div>
														<div class="panel-body swmactionPlanDocs">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>


													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">UC Certificate</h3>
														</div>
														<div class="panel-body swmucCertificateDoc">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>
													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">Progress Photos</h3>
														</div>
														<div class="panel-body swmprogressPhotoDoc">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>


												</div>

											</div>
											
										<div class="tab-pane" id="sanTab5">
											<div class="row">
												<div class="row">
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Physical Target(5year)</label> <input
															type="text" name="" class="form-control swmTotalTarget"
															disabled="disabled">
													</div>
												</div> -->
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Sanctioned Amount (cr)</label> <input
															type="text" name="" class="form-control sanswm2TSAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Utilization (cr)</label> <input
															type="text" name=""
															class="form-control sanswm2TotalUtilization"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Financial Target (cr)</label> <input
															type="text" name="" class="form-control sanswm2tpAoumnt"
															disabled="disabled">

													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Sanctions Amount (cr)</label> <input
															type="text" name="" class="form-control sanswm2LastSanAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Utilized Amount (cr)</label> <input
															type="text" name=""
															class="form-control sanswm2ProposedUtilizedFunds"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="deal">Financial Year</label> <input
															type="text" name=""
															class="form-control sanswm2financialYear"
															disabled="disabled">
													</div>
												</div> 
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name="" class="form-control swmptpAmount">
													</div>
												</div> -->
											</div>
											<div class="well well-dark card">
												<h4>Sub Project Details</h4>
												<div class="subProDetailsdiv">
													<div class="row">
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Sub Project Name (cr)</label> <input
																	type="text" name=""
																	class="form-control sanswm2SubProjectName">
															</div>
														</div>
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Project Description</label>
																<textarea class="form-control sanswm2description" rows="4"></textarea>
															</div>
														</div>
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Sub Project Cost (cr)</label> <input
																	type="text" name=""
																	class="form-control sanswm2totalProjectCost">
															</div>
														</div>
													</div>
													<div class="row">
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Central Assistance (cr)</label> <input
																	type="text" name=""
																	class="form-control sanswm2CentralAssiatance">
															</div>
														</div>
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">State Contribution (cr)</label> <input
																	type="text" name=""
																	class="form-control sanswm2StateContribution">
															</div>
														</div>
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Others (cr)</label> <input type="text"
																	name="" class="form-control sanswm2Others">
															</div>
														</div>
													</div>
												</div>
												<div class="row">
													<div
														class=" sanswm2addSubProject pull-right">
														<!-- <i class="glyphicon glyphicon-plus"
															style="margin-top: 20%;"></i> -->
													</div>
												</div>
											</div>
											</div>
											<div class="row">
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Project Cost (cr)</label> <input
															type="text" name="" class="form-control sanswm2GrandTotal">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control sanswm2GrandCentralAssisTotal">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total State Contribution (cr)</label> <input
															type="text" name=""
															class="form-control sanswm2GrandStateContriTotal">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Others Cost (cr)</label> <input
															type="text" name=""
															class="form-control sanswm2GrandOthersCostTotal">
													</div>
												</div>
											</div>
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Physical Target(5year)</label> <input
															type="text" name=""
															class="form-control sanswm5yearTarget"
															disabled="disabled" value="300">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Sanctioned Amount (cr)</label> <input
															type="text" name="" class="form-control sanswmTsAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Utilization (cr)</label> <input
															type="text" name=""
															class="form-control sanswmTTotalUtilization"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Sanctions Amount (cr)</label> <input
															type="text" name=""
															class="form-control sanswmLastSanction"
															disabled="disabled" value="35">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Utilized Amount (cr)</label> <input
															type="text" name=""
															class="form-control sanswmUtilizedFunds"
															disabled="disabled" value="20">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name="" class="form-control sanswmPTPAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Financial Target (cr)</label> <input
															type="text" name="" class="form-control sanswmTPAAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control sanswmRequestAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="deal">Financial Year</label> <input
															type="text" name=""
															class="form-control sanswmfinancialYear"
															disabled="disabled">
													</div>
												</div> -->
												<div class="clearfix"></div>
												<div class="col-sm-12">
													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">SHPC Doucuments</h3>
														</div>
														<div class="panel-body shpcDocs">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- 	<img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>

													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">Action Plan</h3>
														</div>
														<div class="panel-body swm2actionPlanDocs">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>


													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">UC Certificate</h3>
														</div>
														<div class="panel-body swm2ucCertificateDoc">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>
													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">Progress Photos</h3>
														</div>
														<div class="panel-body swm2progressPhotoDoc">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>


												</div>

											</div>	
											
										<div class="tab-pane" id="sanTab6">
											<div class="row">

												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Head</label> <input type="text"
															name="" class="form-control saniecProposalHead"
															disabled="disabled">
													</div>
												</div> -->
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Financial Target (cr)</label> <input
															type="text" name="" class="form-control saniectpAoumnt">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Sanctioned Amount (cr)</label> <input
															type="text" name="" class="form-control saniecTSAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Utilization (cr)</label> <input
															type="text" name=""
															class="form-control saniecTotalUtilization"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="deal">Financial Year</label> <input
															type="text" name=""
															class="form-control saniecfinancialYear"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4  col-sm-offset-4">
													<div class="form-group">
														<label for="">Last Sanctions Amount (cr)</label> <input
															type="text" name="" class="form-control saniecLastSanAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Utilized Amount (cr)</label> <input
															type="text" name=""
															class="form-control saniecProposedUtilizedFunds"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-12">
													<div class="form-group">
														<label for="">Description</label>
														<textarea class="form-control saniecDescription" rows="4"></textarea>
													</div>
												</div>
												<div class="col-sm-4 col-sm-offset-4">
													<div class="form-group">
														<label for="">Total Project Cost (cr)</label> <input
															type="text" name=""
															class="form-control saniectotalProjectCost">
													</div>
												</div>
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name="" class="form-control iecptpAmount">
													</div>
												</div> -->
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control saniecCentralAssiatance">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">State Contribution (cr)</label> <input
															type="text" name=""
															class="form-control saniecStateContribution">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Others (cr)</label> <input type="text"
															name="" class="form-control saniecOthers">
													</div>
												</div>
												
												<div class="clearfix"></div>
												<div class="col-sm-12">
													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">SHPC Doucuments</h3>
														</div>
														<div class="panel-body shpcDocs">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- 	<img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>

													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">Action Plan</h3>
														</div>
														<div class="panel-body iecactionPlanDocs">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>




													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">UC Certificate</h3>
														</div>
														<div class="panel-body iecucCertificateDoc">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>
													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">Progress Photos</h3>
														</div>
														<div class="panel-body iecprogressPhotoDoc">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>


												</div>

											</div>
										</div>
										<div class="tab-pane" id="sanTab7">
											<div class="row">
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Head</label> <input type="text"
															name="" class="form-control sancbAoeProposalHead"
															disabled="disabled">
													</div>
												</div> -->
											<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Financial Target (cr)</label> <input
															type="text" name="" class="form-control sancbAoetpAoumnt">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Sanctioned Amount (cr)</label> <input
															type="text" name="" class="form-control sancbAoeTSAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Utilization (cr)</label> <input
															type="text" name=""
															class="form-control sancbAoeTotalUtilization"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="deal">Financial Year</label> <input
															type="text" name=""
															class="form-control sancbAoefinancialYear"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Sanctions Amount (cr)</label> <input
															type="text" name=""
															class="form-control sancbAoeLastSanAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Utilized Amount (cr)</label> <input
															type="text" name=""
															class="form-control sancbAoeProposedUtilizedFunds"
															disabled="disabled">
													</div>
												</div>
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name="" class="form-control cbAoeptpAmount">
													</div>
												</div> -->
												<div class="col-sm-12">
													<div class="form-group">
														<label for="">Description</label>
														<textarea class="form-control sancbAoeDescription" rows="4"></textarea>
													</div>
												</div>

												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name="" class="form-control iecptpAmount">
													</div>
												</div> -->
												<div class="col-sm-4 col-sm-offset-4">
													<div class="form-group">
														<label for="">Total Project Cost (cr)</label> <input
															type="text" name=""
															class="form-control sancbAoetotalProjectCost">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control sancbAoeCentralAssiatance">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">State Contribution (cr)</label> <input
															type="text" name=""
															class="form-control sancbAoeStateContribution">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Others (cr)</label> <input type="text"
															name="" class="form-control sancbAoeOthers">
													</div>
												</div>
												
												<div class="clearfix"></div>
												<div class="col-sm-12">
													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">SHPC Doucuments</h3>
														</div>
														<div class="panel-body shpcDocs">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- 	<img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>




													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">Action Plan</h3>
														</div>
														<div class="panel-body cbAoeactionPlanDocs">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>

													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">UC Certificate</h3>
														</div>
														<div class="panel-body cbAoeucCertificateDoc">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>
													<div class="panel panel-default">
														<div class="panel-heading">
															<h3 class="panel-title">Progress Photos</h3>
														</div>
														<div class="panel-body cbAoeprogressPhotoDoc">
															<div class="form-group">

																<div class="clearfix"></div>
																<div class="col-sm-2">
																	<!-- <img src="images/doc.svg">
												<p>
													<a href="" class="btn btn-link">Download</a>
												</p> -->
																</div>

															</div>


														</div>
													</div>


												</div>

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="table-responsive">
								<table class="table table-striped">
									<colgroup>
										<col class="col-xs-2">
										<col class="col-xs-2">
										<col class="col-xs-2">
										<col class="col-xs-2">
										<col class="col-xs-2">
										<col class="col-xs-2">


									</colgroup>
									<thead>
										<tr>
											<th>Proposal Head</th>
											<th>Target for 2017-2018</th>
											<th>Fund Allocation</th>
											<th>Proposal Target</th>
											<th>Center Assistance</th>
											<th>Amount Approved</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>IHHL Installment 1</td>
											<td class="ihhl1targetAmount"></td>
											<td class="ihhl1fundAllocation"></td>
											<td class="ihhl1proposalTarget"></td>
											<td class="ihhl1requestAMount"></td>
											<td class="ihhl1approvedAMount"><input type="text"
												class="ihhl1AmountApproved" /></td>


										</tr>
										<tr>
											<td>IHHL Installment 2</td>
											<td class="ihhl2targetAmount"></td>
											<td class="ihhl2fundAllocation"></td>
											<td class="ihhl2proposalTarget"></td>
											<td class="ihhl2requestAMount"></td>
											<td class="ihhl2approvedAMount"><input type="text"
												class="ihhl2AmountApproved" /></td>
										</tr>
										<tr>
											<td>CT/PT</td>
											<td class="ctpttargetAmount"></td>
											<td class="ctptfundAllocation"></td>
											<td class="ctptproposalTarget"></td>
											<td class="ctptrequestAMount"></td>
											<td class="ctptapprovedAMount"><input type="text"
												class="ctptAmountApproved" /></td>
										</tr>
										<tr>
											<td>SWM Installment 1</td>
											<td class="swmtargetAmount"></td>
											<td class="swmfundAllocation"></td>
											<td class="swmproposalTarget"></td>
											<td class="swmrequestAMount"></td>
											<td class="swmapprovedAMount"><input type="text"
												class="swmAmountApproved" /></td>
										</tr>
										<tr>
											<td>SWM Installment 2</td>
											<td class="swm2targetAmount"></td>
											<td class="swm2fundAllocation"></td>
											<td class="swm2proposalTarget"></td>
											<td class="swm2requestAMount"></td>
											<td class="swm2approvedAMount"><input type="text"
												class="swm2AmountApproved" /></td>
										</tr>
										<tr>
											<td>Total</td>
											<td class=""></td>
											<td class=""></td>
											<td class=""></td>
											<td class="total"></td>
											<td class=""></td>
										</tr>
										<tr>
											<td>IEC</td>
											<td class="iectargetAmount"></td>
											<td class="iecfundAllocation"></td>
											<td class="iecproposalTarget"></td>
											<td class="iecrequestAMount"></td>
											<td class="iecapprovedAMount"><input type="text"
												class="iecAmountApproved" /></td>
										</tr>
										<tr>
											<td>CB & AOE</td>
											<td class="cbAoetargetAmount"></td>
											<td class="cbAoefundAllocation"></td>
											<td class="cbAoeproposalTarget"></td>
											<td class="cbAoerequestAMount"></td>
											<td class="cbAoeapprovedAMount"><input type="text"
												class="cbAoeAmountApproved" /></td>
										</tr>
										<tr>
											<td>Grand Total</td>
											<td class=""></td>
											<td class=""></td>
											<td class=""></td>
											<td class="grandTotal"></td>
											<td class=""></td>
										</tr>

									</tbody>
								</table>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
									<label for="">Total Approved Amount</label> <input type="text"
										name="" class="form-control sanApproveAmount">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label>Sanction letter</label> <input type="file" name="img[]"
										class="file" id="sanctionUpload">
									<div class="input-group col-xs-12">
										<input type="text" class="form-control" disabled
											placeholder="Upload file"> <span
											class="input-group-btn">
											<button class="browse btn btn-primary" type="button">
												<i class="glyphicon glyphicon-search"></i> Browse
											</button>
										</span>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label for="">Sanction letter Reference No</label> <input
										type="text" name="" class="form-control sanRefNo">
								</div>
							</div>
							<div class="col-sm-12">
								<div class="form-group">
									<label for="">Remarks</label>
									<textarea class="form-control sanRemarks" rows="4"></textarea>
								</div>
							</div>
						</div>
					</div>
					<!-- < /modelbody> -->
					<div class="modal-footer">
						<button type="button" class="btn btn-danger rejectSanction"
							data-dismiss="modal">Return</button>
						<button type="button" class="btn btn-success approveSanction">Approve</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- Model for Proposal -->
	<!-- Modal -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
		aria-labelledby="myModal">
		<div class="modal-dialog modal-lg" role="document" style="width: 80%;">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title" id="myModalLabel">Create Proposal</h4>
				</div>
				<form>
					<div class="modal-body">
						<div class="row">
							<!-- <div class="col-sm-4">
								<div class="form-group">
									<label for="deal">Proposal Component</label>
									<select	class="form-control expenseHeads">
										<option value="IHHL Installment1">IHHL Installment 1</option>
										<option value="IHHL Installment2">IHHL Installment 2</option>
										<option value="CT/PT">CT/PT</option>
										<option value="SWM">SWM</option>
										<option value="IEC">IEC</option>
										<option value="CB&AOE">CB & AOE</option>
										
									</select>
								</div>
							</div> -->
							<!-- <div class="col-sm-4 col-sm-offset-2">
								<div class="form-group">
									<label>Proposal Name</label> <input type="text" name=""
										class="form-control proposalName">
								</div>
							</div> -->
							<div class="col-sm-4  col-sm-offset-4">
								<div class="form-group">
									<label for="deal">Financial Year</label> <select
										class="form-control financialYear">
										<option value="2015-2016">2015-2016</option>
										<option value="2016-2017">2016-2017</option>
										<option value="2017-2018" selected="selected">2017-2018</option>
										<option value="2018-2019">2018-2019</option>
									</select>
								</div>
							</div>
							<div class="clearfix"></div>
							<div class="col-sm-12 text-center">
								<ul id="breadcrumb">
									<li class="createLi"><a href="#" class="active">Create</a></li>
									<li class="validateLi"><a href="#">Saved</a></li>
									<li class="shpcAppLi"><a href="#">SHPC Approval</a></li>
									<li class="centerAppLi"><a href="#">Center Approval</a></li>
									<li class="centerRejLi" style="display: none"><a href="#">Center
											Rejected</a></li>
								</ul>
							</div>

							<div class="col-sm-12">
								<div id="rootwizard">
									<div class="navbar">
										<div class="navbar-inner">
											<div class="container-fluid">
												<div class="row">
													<ul class="nav nav-tabs nav-justified">
														<li class="tab1 active"><a href="#tab1"
															data-toggle="tab">IHHL Installment 1</a></li>
														<li class="tab2"><a href="#tab2" data-toggle="tab">IHHL
																Installment 2</a></li>
														<li class="tab3"><a href="#tab3" data-toggle="tab">CT/PT</a></li>
														<li class="tab4"><a href="#tab4" data-toggle="tab">SWM
																Installment 1</a></li>
														<li class="tab5"><a href="#tab5" data-toggle="tab">SWM
																Installment 2</a></li>
														<li class="tab6"><a href="#tab6" data-toggle="tab">IEC</a></li>
														<li class="tab7"><a href="#tab7" data-toggle="tab">CB
																& AOE</a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div class="tab-content">
										<div class="tab-pane active" id="tab1">
											<div class="row">
												<button type="button"
													class="btn btn-success pull-right ihhl1utilization"
													style="min-width: 75px; font-size: 18px;"
													data-toggle="modal" data-target="#FundUtilization">Add
													Utilization</button>
											</div>
											<div class="row">
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Physical Target(5year)</label> <input
															type="text" name="" class="form-control iHHL1TotalTarget"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Sanctioned Amount (cr)</label> <input
															type="text" name="" class="form-control iHHL1TSAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Utilization (cr)</label> <input
															type="text" name=""
															class="form-control iHHL1TotalUtilization"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4 col-sm-offset-4">
													<div class="form-group">
														<label for="">Last Sanctions Amount (cr)</label> <input
															type="text" name=""
															class="form-control iHHL1LastSanAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Utilized Amount (cr)</label> <input
															type="text" name=""
															class="form-control iHHL1ProposedUtilizedFunds"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name="" class="form-control iHHL1ptpAmount">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Financial Target (cr)</label> <input
															type="text" name="" class="form-control iHHL1tpAoumnt">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control iHHL1requestAmount">
													</div>
												</div>
												<div class="col-sm-12">
													<div class="form-group">
														<label for="">Remarks</label>
														<textarea class="form-control iHHL1Remarks" rows="4"></textarea>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>Detailed Proposal</label> <input type="file"
															name="img[]" class="file"
															accept="application/pdf, image/jpeg"
															id="iHHL1DetailedUpload">
														<div class="input-group col-xs-12">
															<input type="text" class="form-control iHHL1dapFileText"
																disabled placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label for="">Detailed Proposal Reference Number</label> <input
															type="text" name="" class="form-control iHHL1dapRefNo">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>UC Certificate</label> <input type="file"
															name="img[]" class="file"
															accept="application/pdf, image/jpeg" id="iHHL1ucUpload">
														<div class="input-group col-xs-12">
															<input type="text" class="form-control iHHLucFileText"
																disabled placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label for="">UC Reference Number</label> <input
															type="text" name="" class="form-control iHHL1ucRefNo">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>Progress Photo</label> <input type="file"
															name="img[]" class="file"
															accept="application/pdf, image/jpeg"
															id="iHHL1progressUpload">
														<div class="input-group col-xs-12">
															<input type="text"
																class="form-control iHHL1ProgressFileText" disabled
																placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>

												<div class="clearfix"></div>
											</div>
										</div>
										<div class="tab-pane" id="tab2">
											<div class="row">
												<button type="button"
													class="btn btn-success pull-right ihhl2utilization"
													style="min-width: 75px; font-size: 18px;"
													data-toggle="modal" data-target="#FundUtilization">Add
													Utilization</button>
											</div>
										
											<div class="row">

												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Physical Target(5year)</label> <input
															type="text" name="" class="form-control iHHL2TotalTarget"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Sanctioned Amount (cr)</label> <input
															type="text" name="" class="form-control iHHL2TSAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Utilization (cr)</label> <input
															type="text" name=""
															class="form-control iHHL2TotalUtilization"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">IHHL Installment 1</label> <select
															class="form-control ihhl1dropdown">
															<!-- <option value="2015-2016">2015-2016</option>
															<option value="2016-2017">2016-2017</option>
															<option value="2017-2018" selected="selected">2017-2018</option>
															<option value="2018-2019">2018-2019</option> -->
														</select>
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Sanctions Amount (cr)</label> <input
															type="text" name=""
															class="form-control iHHL2LastSanAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Utilized Amount (cr)</label> <input
															type="text" name=""
															class="form-control iHHL2ProposedUtilizedFunds"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name="" class="form-control iHHL2ptpAmount">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Financial Target (cr)</label> <input
															type="text" name="" class="form-control iHHL2tpAoumnt">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control iHHL2requestAmount">
													</div>
												</div>
												<div class="col-sm-12">
													<div class="form-group">
														<label for="">Remarks</label>
														<textarea class="form-control iHHL2Remarks" rows="4"></textarea>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>Detailed Proposal</label> <input type="file"
															name="img[]" class="file" id="iHHL2DetailedUpload">
														<div class="input-group col-xs-12">
															<input type="text" class="form-control iHHL2dapFileText"
																disabled placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label for="">Detailed Proposal Reference Number</label> <input
															type="text" name="" class="form-control iHHL2dapRefNo">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>UC Certificate</label> <input type="file"
															name="img[]" class="file" id="iHHL2ucUpload">
														<div class="input-group col-xs-12">
															<input type="text" class="form-control iHHL2ucFileText"
																disabled placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label for="">UC Reference Number</label> <input
															type="text" name="" class="form-control iHHL2ucRefNo">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>Progress Photo</label> <input type="file"
															name="img[]" class="file" id="iHHL2progressUpload">
														<div class="input-group col-xs-12">
															<input type="text"
																class="form-control iHHL2ProgressFileText" disabled
																placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>Financial Progress</label> <input type="file"
															name="img[]" class="file" id="financialUpload">
														<div class="input-group col-xs-12">
															<input type="text" class="form-control financialFileText"
																disabled placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="tab-pane" id="tab3">
											<div class="row">
												<button type="button"
													class="btn btn-success pull-right ctptutilization"
													style="min-width: 75px; font-size: 18px;"
													data-toggle="modal" data-target="#FundUtilization">Add
													Utilization</button>
											</div>
											<div class="row">

												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Physical Target(5year)</label> <input
															type="text" name="" class="form-control ctptTotalTarget"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Sanctioned Amount (cr)</label> <input
															type="text" name="" class="form-control ctptTSAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Utilization (cr)</label> <input
															type="text" name=""
															class="form-control ctptTotalUtilization"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Financial Target (cr)</label> <input
															type="text" name="" class="form-control cTPTtpAoumnt"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group ">
														<label for="">Last Sanctions Amount (cr)</label> <input
															type="text" name=""
															class="form-control ctptLastSanAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Utilized Amount (cr)</label> <input
															type="text" name=""
															class="form-control cTPTProposedUtilizedFunds"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-12">
													<div class="form-group">
														<label for="">Description</label>
														<textarea class="form-control cTPTDescription" rows="4"></textarea>
													</div>
												</div>
												<div class="col-sm-4 col-sm-offset-4">
													<div class="form-group">
														<label for="">Total Project Cost (cr)</label> <input
															type="text" name=""
															class="form-control cTPTtotalProjectCost">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name="" class="form-control cTPTptpAmount">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control ctptCentralAssiatance">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">State Contribution (cr)</label> <input
															type="text" name=""
															class="form-control ctptStateContribution">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Others (cr)</label> <input type="text"
															name="" class="form-control ctptOthers">
													</div>
												</div>

												<div class="col-sm-6">
													<div class="form-group">
														<label>Detailed Proposal</label> <input type="file"
															name="img[]" class="file" id="cTPTDetailedUpload">
														<div class="input-group col-xs-12">
															<input type="text" class="form-control cTPTdapFileText"
																disabled placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label for="">Detailed Proposal Reference Number</label> <input
															type="text" name="" class="form-control cTPTdapRefNo">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>UC Certificate</label> <input type="file"
															name="img[]" class="file" id="cTPTucUpload">
														<div class="input-group col-xs-12">
															<input type="text" class="form-control cTPTucFileText"
																disabled placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label for="">UC Reference Number</label> <input
															type="text" name="" class="form-control cTPTucRefNo">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>Progress Photo</label> <input type="file"
															name="img[]" class="file" id="cTPTprogressUpload">
														<div class="input-group col-xs-12">
															<input type="text"
																class="form-control cTPTProgressFileText" disabled
																placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>

											</div>
										</div>
										<div class="tab-pane" id="tab4">
											<div class="row">
												<button type="button"
													class="btn btn-success pull-right swmutilization"
													style="min-width: 75px; font-size: 18px;"
													data-toggle="modal" data-target="#FundUtilization">Add
													Utilization</button>
											</div>
											<div class="row">
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Physical Target(5year)</label> <input
															type="text" name="" class="form-control swmTotalTarget"
															disabled="disabled">
													</div>
												</div> -->
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Sanctioned Amount (cr)</label> <input
															type="text" name="" class="form-control swmTSAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Utilization (cr)</label> <input
															type="text" name=""
															class="form-control swmTotalUtilization"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Financial Target (cr)</label> <input
															type="text" name="" class="form-control swmtpAoumnt"
															disabled="disabled">

													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Sanctions Amount (cr)</label> <input
															type="text" name="" class="form-control swmLastSanAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Utilized Amount (cr)</label> <input
															type="text" name=""
															class="form-control swmProposedUtilizedFunds"
															disabled="disabled">
													</div>
												</div>
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name="" class="form-control swmptpAmount">
													</div>
												</div> -->
											</div>
											<div class="well well-dark card">
												<h4>Sub Project Details</h4>
												<div class="subProDetailsdiv">
													<div class="row">
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Sub Project Name (cr)</label> <input
																	type="text" name=""
																	class="form-control swmSubProjectName">
															</div>
														</div>
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Project Description</label>
																<textarea class="form-control swmdescription" rows="4"></textarea>
															</div>
														</div>
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Sub Project Cost (cr)</label> <input
																	type="text" name=""
																	class="form-control swmtotalProjectCost">
															</div>
														</div>
													</div>
													<div class="row">
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Central Assistance (cr)</label> <input
																	type="text" name=""
																	class="form-control swmCentralAssiatance">
															</div>
														</div>
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">State Contribution (cr)</label> <input
																	type="text" name=""
																	class="form-control swmStateContribution">
															</div>
														</div>
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Others (cr)</label> <input type="text"
																	name="" class="form-control swmOthers">
															</div>
														</div>
													</div>
												</div>
												<div class="row">
													<div
														class="btn btn-success btn-rounded addSubProject pull-right">
														<i class="glyphicon glyphicon-plus"
															style="margin-top: 20%;"></i>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Project Cost (cr)</label> <input
															type="text" name="" class="form-control swmGrandTotal">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control swmGrandCentralAssisTotal">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total State Contribution (cr)</label> <input
															type="text" name=""
															class="form-control swmGrandStateContriTotal">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Others Cost (cr)</label> <input
															type="text" name=""
															class="form-control swmGrandOthersCostTotal">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>Detailed Proposal</label> <input type="file"
															name="img[]" class="file" id="swmDetailedUpload">
														<div class="input-group col-xs-12">
															<input type="text" class="form-control swmdapFileText"
																disabled placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label for="">Detailed Proposal Reference Number</label> <input
															type="text" name="" class="form-control swmdapRefNo">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>UC Certificate</label> <input type="file"
															name="img[]" class="file" id="swmucUpload">
														<div class="input-group col-xs-12">
															<input type="text" class="form-control swmucFileText"
																disabled placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label for="">UC Reference Number</label> <input
															type="text" name="" class="form-control swmucRefNo">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>Progress Photo</label> <input type="file"
															name="img[]" class="file" id="swmprogressUpload">
														<div class="input-group col-xs-12">
															<input type="text"
																class="form-control swmProgressFileText" disabled
																placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>

											</div>
										</div>
										<div class="tab-pane" id="tab5">
											<div class="row">
												<button type="button"
													class="btn btn-success pull-right swm2utilization"
													style="min-width: 75px; font-size: 18px;"
													data-toggle="modal" data-target="#FundUtilization">Add
													Utilization</button>
											</div>
											<div class="row">
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Physical Target(5year)</label> <input
															type="text" name="" class="form-control swmTotalTarget"
															disabled="disabled">
													</div>
												</div> -->
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Sanctioned Amount (cr)</label> <input
															type="text" name="" class="form-control swm2TSAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Utilization (cr)</label> <input
															type="text" name=""
															class="form-control swm2TotalUtilization"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Financial Target (cr)</label> <input
															type="text" name="" class="form-control swm2tpAoumnt"
															disabled="disabled">

													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Sanctions Amount (cr)</label> <input
															type="text" name=""
															class="form-control swm2LastSanAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Utilized Amount (cr)</label> <input
															type="text" name=""
															class="form-control swm2ProposedUtilizedFunds"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">SWM Installment 1</label> <select
															class="form-control swmdropdown">
															<!-- <option value="2015-2016">2015-2016</option>
															<option value="2016-2017">2016-2017</option>
															<option value="2017-2018" selected="selected">2017-2018</option>
															<option value="2018-2019">2018-2019</option> -->
														</select>
													</div>
												</div>
											</div>
											<div class="well well-dark card">
												<h4>Sub Project Details</h4>
												<div class="swm2subProDetailsdiv">
													<div class="row">
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Sub Project Name (cr)</label> <input
																	type="text" name=""
																	class="form-control swm2SubProjectName">
															</div>
														</div>
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Project Description</label>
																<textarea class="form-control swm2description" rows="4"></textarea>
															</div>
														</div>
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Sub Project Cost (cr)</label> <input
																	type="text" name=""
																	class="form-control swm2totalProjectCost">
															</div>
														</div>
													</div>
													<div class="row">
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Central Assistance (cr)</label> <input
																	type="text" name=""
																	class="form-control swm2CentralAssiatance">
															</div>
														</div>
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">State Contribution (cr)</label> <input
																	type="text" name=""
																	class="form-control swm2StateContribution">
															</div>
														</div>
														<div class="col-sm-4">
															<div class="form-group">
																<label for="">Others (cr)</label> <input type="text"
																	name="" class="form-control swm2Others">
															</div>
														</div>
													</div>
												</div>
												<div class="row">
													<div
														class="btn btn-success btn-rounded swm2addSubProject pull-right">
														<i class="glyphicon glyphicon-plus"
															style="margin-top: 20%;"></i>
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Project Cost (cr)</label> <input
															type="text" name="" class="form-control swm2GrandTotal">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control swm2GrandCentralAssisTotal">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total State Contribution (cr)</label> <input
															type="text" name=""
															class="form-control swm2GrandStateContriTotal">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Others Cost (cr)</label> <input
															type="text" name=""
															class="form-control swm2GrandOthersCostTotal">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>Detailed Proposal</label> <input type="file"
															name="img[]" class="file" id="swm2DetailedUpload">
														<div class="input-group col-xs-12">
															<input type="text" class="form-control swm2dapFileText"
																disabled placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label for="">Detailed Proposal Reference Number</label> <input
															type="text" name="" class="form-control swm2dapRefNo">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>UC Certificate</label> <input type="file"
															name="img[]" class="file" id="swm2ucUpload">
														<div class="input-group col-xs-12">
															<input type="text" class="form-control swm2ucFileText"
																disabled placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label for="">UC Reference Number</label> <input
															type="text" name="" class="form-control swm2ucRefNo">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>Progress Photo</label> <input type="file"
															name="img[]" class="file" id="swm2progressUpload">
														<div class="input-group col-xs-12">
															<input type="text"
																class="form-control swm2ProgressFileText" disabled
																placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>

											</div>
										</div>
										<div class="tab-pane" id="tab6">
											<div class="row">
												<button type="button"
													class="btn btn-success pull-right iecutilization"
													style="min-width: 75px; font-size: 18px;"
													data-toggle="modal" data-target="#FundUtilization">Add
													Utilization</button>
											</div>
											<div class="row">

												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Physical Target(5year)</label> <input
															type="text" name="" class="form-control iecTotalTarget"
															disabled="disabled">
													</div>
												</div> -->
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Financial Target (cr)</label> <input
															type="text" name="" class="form-control iectpAoumnt">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Sanctioned Amount (cr)</label> <input
															type="text" name="" class="form-control iecTSAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Utilization (cr)</label> <input
															type="text" name=""
															class="form-control iecTotalUtilization"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4  col-sm-offset-4">
													<div class="form-group">
														<label for="">Last Sanctions Amount (cr)</label> <input
															type="text" name="" class="form-control iecLastSanAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Utilized Amount (cr)</label> <input
															type="text" name=""
															class="form-control iecProposedUtilizedFunds"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-12">
													<div class="form-group">
														<label for="">Description</label>
														<textarea class="form-control iecDescription" rows="4"></textarea>
													</div>
												</div>
												<div class="col-sm-4 col-sm-offset-4">
													<div class="form-group">
														<label for="">Total Project Cost (cr)</label> <input
															type="text" name=""
															class="form-control iectotalProjectCost">
													</div>
												</div>
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name="" class="form-control iecptpAmount">
													</div>
												</div> -->
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control iecCentralAssiatance">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">State Contribution (cr)</label> <input
															type="text" name=""
															class="form-control iecStateContribution">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Others (cr)</label> <input type="text"
															name="" class="form-control iecOthers">
													</div>
												</div>
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name="" class="form-control iecptpAmount">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Total Financial Target (cr)</label> <input
															type="text" name="" class="form-control iectpAoumnt">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Central Assistance (cr)</label> <input
															type="text" name="" class="form-control iecrequestAmount">
													</div>
												</div>
												<div class="col-sm-12">
													<div class="form-group">
														<label for="">Remarks</label>
														<textarea class="form-control iecRemarks" rows="4"></textarea>
													</div>
												</div> -->
												<div class="col-sm-6">
													<div class="form-group">
														<label>Detailed Proposal</label> <input type="file"
															name="img[]" class="file" id="iecDetailedUpload">
														<div class="input-group col-xs-12">
															<input type="text" class="form-control iecdapFileText"
																disabled placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label for="">Detailed Proposal Reference Number</label> <input
															type="text" name="" class="form-control iecdapRefNo">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>UC Certificate</label> <input type="file"
															name="img[]" class="file" id="iecucUpload">
														<div class="input-group col-xs-12">
															<input type="text" class="form-control iecucFileText"
																disabled placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label for="">UC Reference Number</label> <input
															type="text" name="" class="form-control iecucRefNo">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>Progress Photo</label> <input type="file"
															name="img[]" class="file"
															accept="application/pdf, image/jpeg"
															id="iecprogressUpload">
														<div class="input-group col-xs-12">
															<input type="text"
																class="form-control iecProgressFileText" disabled
																placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="tab-pane" id="tab7">
											<div class="row">
												<button type="button"
													class="btn btn-success pull-right cbAoeutilization"
													style="min-width: 75px; font-size: 18px;"
													data-toggle="modal" data-target="#FundUtilization">Add
													Utilization</button>
											</div>
											<div class="row">

												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Physical Target(5year)</label> <input
															type="text" name="" class="form-control cbAoeTotalTarget"
															disabled="disabled">
													</div>
												</div> -->
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Financial Target (cr)</label> <input
															type="text" name="" class="form-control cbAoetpAoumnt">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Sanctioned Amount (cr)</label> <input
															type="text" name="" class="form-control cbAoeTSAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Total Utilization (cr)</label> <input
															type="text" name=""
															class="form-control cbAoeTotalUtilization"
															disabled="disabled">
													</div>
												</div>

												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Sanctions Amount (cr)</label> <input
															type="text" name=""
															class="form-control cbAoeLastSanAmount"
															disabled="disabled">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Last Utilized Amount (cr)</label> <input
															type="text" name=""
															class="form-control cbAoeProposedUtilizedFunds"
															disabled="disabled">
													</div>
												</div>
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name="" class="form-control cbAoeptpAmount">
													</div>
												</div> -->
												<div class="col-sm-12">
													<div class="form-group">
														<label for="">Description</label>
														<textarea class="form-control cbAoeDescription" rows="4"></textarea>
													</div>
												</div>

												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Proposal Target Physical</label> <input
															type="text" name="" class="form-control iecptpAmount">
													</div>
												</div> -->
												<div class="col-sm-4 col-sm-offset-4">
													<div class="form-group">
														<label for="">Total Project Cost (cr)</label> <input
															type="text" name=""
															class="form-control cbAoetotalProjectCost">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control cbAoeCentralAssiatance">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">State Contribution (cr)</label> <input
															type="text" name=""
															class="form-control cbAoeStateContribution">
													</div>
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label for="">Others (cr)</label> <input type="text"
															name="" class="form-control cbAoeOthers">
													</div>
												</div>
												<!-- <div class="col-sm-4">
													<div class="form-group">
														<label for="">Central Assistance (cr)</label> <input
															type="text" name=""
															class="form-control cbAoerequestAmount">
													</div>
												</div>
												<div class="col-sm-12">
													<div class="form-group">
														<label for="">Remarks</label>
														<textarea class="form-control cbAoeRemarks" rows="4"></textarea>
													</div>
												</div> -->
												<div class="col-sm-6">
													<div class="form-group">
														<label>Detailed Proposal</label> <input type="file"
															name="img[]" accept="application/pdf, image/jpeg"
															class="file" id="cbAoeDetailedUpload">
														<div class="input-group col-xs-12">
															<input type="text" class="form-control cbAoedapFileText"
																disabled placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label for="">Detailed Proposal Reference Number</label> <input
															type="text" name="" class="form-control cbAoedapRefNo">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>UC Certificate</label> <input type="file"
															name="img[]" class="file" id="cbAoeucUpload">
														<div class="input-group col-xs-12">
															<input type="text" class="form-control cbAoeucFileText"
																disabled placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label for="">UC Reference Number</label> <input
															type="text" name="" class="form-control cbAoeucRefNo">
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label>Progress Photo</label> <input type="file"
															name="img[]" accept="application/pdf, image/jpeg"
															class="file" id="cbAoeprogressUpload">
														<div class="input-group col-xs-12">
															<input type="text"
																class="form-control cbAoeProgressFileText" disabled
																placeholder="Upload file"> <span
																class="input-group-btn">
																<button class="browse btn btn-primary" type="button">
																	<i class="glyphicon glyphicon-search"></i> Browse
																</button>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
					<!-- < /modelbody> -->
					<div class="modal-footer">
						<button type="button" class="btn btn-success saveProposal"
							data-dismiss="modal">Save</button>
						<button type="button" class="btn btn-success withDrawProposal"
							data-dismiss="modal" style="display: none;">Withdraw</button>
						<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>

					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="modal fade" id="SubmitProposal" tabindex="-1" role="dialog"
		aria-labelledby="SubmitProposal" style="overflow: scroll !important;">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title" id="myModalLabel">Create Proposal</h4>
				</div>
				<form>
					<div class="modal-body">
						<div class="row">
							<div class="table-responsive">
								<table class="table table-striped">
									<colgroup>
										<col class="col-xs-2">
										<col class="col-xs-2">
										<col class="col-xs-2">
										<col class="col-xs-2">
										<col class="col-xs-2">


									</colgroup>
									<thead>
										<tr>
											<th>Proposal Head</th>
											<th>Target for 2017-2018</th>
											<th>Fund Allocation</th>
											<th>Proposal Target</th>
											<th>Center Assistance</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>IHHL Installment 1</td>
											<td class="ihhl1targetAmount"></td>
											<td class="ihhl1fundAllocation"></td>
											<td class="ihhl1proposalTarget"></td>
											<td class="ihhl1requestAMount"></td>


										</tr>
										<tr>
											<td>IHHL Installment 2</td>
											<td class="ihhl2targetAmount"></td>
											<td class="ihhl2fundAllocation"></td>
											<td class="ihhl2proposalTarget"></td>
											<td class="ihhl2requestAMount"></td>
										</tr>
										<tr>
											<td>CT/PT</td>
											<td class="ctpttargetAmount"></td>
											<td class="ctptfundAllocation"></td>
											<td class="ctptproposalTarget"></td>
											<td class="ctptrequestAMount"></td>
										</tr>
										<tr>
											<td>SWM Installment 1</td>
											<td class="swmtargetAmount"></td>
											<td class="swmfundAllocation"></td>
											<td class="swmproposalTarget"></td>
											<td class="swmrequestAMount"></td>
										</tr>
										<tr>
											<td>SWM Installment 2</td>
											<td class="swm2targetAmount"></td>
											<td class="swm2fundAllocation"></td>
											<td class="swm2proposalTarget"></td>
											<td class="swm2requestAMount"></td>
										</tr>
										<tr>
											<td>Total</td>
											<td class=""></td>
											<td class=""></td>
											<td class=""></td>
											<td class="total"></td>
										</tr>
										<tr>
											<td>IEC</td>
											<td class="iectargetAmount"></td>
											<td class="iecfundAllocation"></td>
											<td class="iecproposalTarget"></td>
											<td class="iecrequestAMount"></td>
										</tr>
										<tr>
											<td>CB & AOE</td>
											<td class="cbAoetargetAmount"></td>
											<td class="cbAoefundAllocation"></td>
											<td class="cbAoeproposalTarget"></td>
											<td class="cbAoerequestAMount"></td>
										</tr>
										<tr>
											<td>Grand Total</td>
											<td class=""></td>
											<td class=""></td>
											<td class=""></td>
											<td class="grandTotal"></td>
										</tr>

									</tbody>
								</table>
							</div>

							<div class="col-sm-6">
								<div class="form-group">
									<label>SHPC Approved</label>
									<!-- Slide THREE -->
									<div class="slideThree">
										<input type="checkbox" value="None" id="shpcApproved"
											name="check" checked="checked" /> <label for="shpcApproved"></label>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label>SHPC Approval Documents</label> <input type="file"
										name="img[]" class="file" accept="application/pdf, image/jpeg"
										id="shpcUpload">
									<div class="input-group col-xs-12">
										<input type="text" class="form-control shpcFileText" disabled
											placeholder="Upload file"> <span
											class="input-group-btn">
											<button class="browse btn btn-primary" type="button">
												<i class="glyphicon glyphicon-search"></i> Browse
											</button>
										</span>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label for="">SHPC Reference Number</label> <input type="text"
										name="" class="form-control shpcRefNo">
								</div>
							</div>

						</div>
					</div>
					<!-- < /modelbody> -->
					<div class="modal-footer">
						<button type="button" class="btn btn-success submitProposal">Submit</button>
						<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>

					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="modal fade" id="FundUtilization" tabindex="-1"
		role="dialog" aria-labelledby="FundUtilization">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close utilCancel" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title" id="FundUtilizationLabel">Create
						Utilization</h4>
				</div>
				<form>
					<div class="modal-body">
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
									<label for="">Expenses Head</label> <select
										class="form-control" id="utilExpenseHead">
										<option value="IHHL Installment1">IHHL Installment 1</option>
										<option value="IHHL Installment2">IHHL Installment 2</option>
										<option value="CT/PT">CT/PT</option>
										<option value="SWM Installment1">SWM Installment 1</option>
										<option value="SWM Installment2">SWM Installment 2</option>
										<option value="IEC">IEC</option>
										<option value="CB&AOE">CB & AOE</option>

									</select>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label for="">Financial Year</label> <select
										class="form-control" id="utilFinancialYear">
										<option value="2016-2017">2016-2017</option>
										<option value="2017-2018">2017-2018</option>
										<option value="2018-2019">2018-2019</option>
										<option value="2019-2020">2019-2020</option>

									</select>
								</div>
							</div>


							<div class="col-sm-6">
								<div class="form-group">
									<label for="">Utilization Amount</label> <input type="text"
										name="" class="form-control utilizationAmount">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label>UC Certificate</label> <input type="file" id="utilUcCertificate" name="img[]"
										class="file">
									<div class="input-group col-xs-12">
										<input type="text" class="form-control utilUcTextName" disabled
											placeholder="Upload file"> <span
											class="input-group-btn">
											<button class="browse btn btn-primary" type="button">
												<i class="glyphicon glyphicon-search"></i> Browse
											</button>
										</span>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label for="">Ref. NO.</label> <input type="text" name=""
										class="form-control utilUcRefNo">
								</div>
							</div>

							<div class="col-sm-6">
								<div class="form-group">
									<label>Photo Graphs</label> <input type="file" id="utilPhotograph" name="img[]"
										class="file">
									<div class="input-group col-xs-12">
										<input type="text" class="form-control utilPhotoText" disabled
											placeholder="Upload file"> <span
											class="input-group-btn">
											<button class="browse btn btn-primary" type="button">
												<i class="glyphicon glyphicon-search"></i> Browse
											</button>
										</span>
									</div>
								</div>
							</div>

							<div class="col-sm-12">
								<div class="form-group">
									<label for="">Remarks</label>
									<textarea class="form-control utilRemarks" rows="3"></textarea>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label for="">% Work completed</label> <input type="text"
										name="" class="form-control utilWorkCompleted">
								</div>
							</div>
							<div class="col-sm-6 utilConstructedNodiv" style="display: none">
								<div class="form-group">
									<label for="">Constructed Number</label> <input type="text"
										name="" class="form-control utilConstructedNo">
								</div>
							</div>
							<div class="col-sm-6 utilCommencedNoDiv" style="display: none">
								<div class="form-group">
									<label for="">Commenced Number</label> <input type="text"
										name="" class="form-control utilCommencedNo">
								</div>
							</div>
							<div class="col-sm-6 utilPhotoCommencedNoDiv" style="display: none">
								<div class="form-group">
									<label for="">Photograph Commenced Number</label> <input type="text"
										name="" class="form-control utilPhotoCommencedNo">
								</div>
							</div>
							<div class="col-sm-6 utilPhotoCommencedNoDiv" style="display: none">
								<div class="form-group">
									<label for="">Photograph Completed Number</label> <input type="text"
										name="" class="form-control utilPhotoCompleteNo">
								</div>
							</div>

						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-success saveUtilization">Save</button>
						<button type="button" class="btn btn-default utilCancel" >Cancel</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="modal fade" id="infoPopup" role="dialog"
		style="z-index: 9999">
		<div class="modal-dialog modal-md">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title"></h4>
				</div>
				<div class="modal-body">
					<div class="row"></div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary infoOk">Ok</button>
					<!-- <button type="button" class="btn btn-default"
									data-dismiss="modal">Cancel</button> -->
				</div>
			</div>

		</div>
	</div>
	<!-- /container -->
	<script
		src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script>
		window.jQuery
				|| document
						.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')
	</script>
	<script src="js/vendor/bootstrap.min.js"></script>
	<script src="js/SBMFundRequisition.js"></script>
	<script src="js/jquery.dataTables.min.js"></script>
	<script src="js/dataTables.bootstrap.min.js"></script>
	<script type="text/javascript">
		$(document).on('click', '.browse', function() {
			var file = $(this).parent().parent().parent().find('.file');
			file.trigger('click');
		});
		$(document).on(
				'change',
				'.file',
				function() {
					$(this).parent().find('.form-control').val(
							$(this).val().replace(/C:\\fakepath\\/i, ''));
				});
	</script>
	<script type="text/javascript">
		$(document)
				.ready(
						function() {
							var loginStatus = false;
							var getUrlParameter = function getUrlParameter(
									sParam) {
								var sPageURL = decodeURIComponent(window.location.search
										.substring(1)), sURLVariables = sPageURL
										.split('&'), sParameterName, i;

								for (i = 0; i < sURLVariables.length; i++) {
									sParameterName = sURLVariables[i]
											.split('=');

									if (sParameterName[0] === sParam) {
										return sParameterName[1] === undefined ? true
												: sParameterName[1];
									}
								}
							};
							var loginName = getUrlParameter("user");
							var stateCodeId;
							var userstateName;
							var usrRoleName;
							console.log(loginName);
							if (loginName != 0 && loginName != "undefined") {
								var dataUserName = new Object();
								dataUserName.emailId = loginName;
								$
										.ajax({
											//url : "http://183.82.144.250:8080/SBMUserManagement/getUserMaster",
											url : "http://localhost:8080/SBMUserManagement/getUserMaster",
											//url : "http://www.swachhbharaturban.in:8080/SBMUserManagement/getUserMaster",
											type : 'POST',
											data : JSON.stringify(dataUserName),
											contentType : "application/json",
											success : function(data) {
												console.log(data)
												if (data.length != 0) {
													console.log(data.firstName);
													if (data.firstName != undefined) {
														$('#loginName').text(
																data.firstName);
														$('#welcomeName')
																.text(
																		"Welcome "
																				+ data.firstName
																				+ "  ");
														$('#logOut').show();
														$('#loginReg').hide();
														$('#welcomeReg').show();
														stateCodeId = data.stateCode.stateCode;
														userstateName = data.stateCode.stateName;
														usrRoleName = data.role_id.roleName;

													} else {
														$('#loginName').text(
																data.ulbName);
														$('#welcomeName')
																.text(
																		"Welcome "
																				+ data.ulbName
																				+ "  ");
														$('#logOut').show();
														$('#loginReg').hide();
														$('#welcomeReg').show();
													}

												} else {
												}

											},
											error : function(data) {
												console.log(data);
												$('#loginName').text(loginName);
												$('#logOut').show();
												$('#loginReg').hide();
												$('#welcomeReg').show();
												$('#logOut').show();
											}
										});

							} else {
								$('#loginName').text("LOGIN");
								$('#logOut').hide();
								$('#loginReg').show();
								$('#welcomeReg').hide();
							}
							if ($('#loginName').text() == "null") {
								$('#loginName').text("LOGIN");
								$('#logOut').hide();
								$('#loginReg').show();
								$('#welcomeReg').hide();
							}

							var host = "http://sbmtest.connect2go.in";
							//var host = "http://www.swachhbharaturban.in/sbm/home/#/SBM";
							var encData = getUrlParameter("encryptdata");
							console.log("Before:" + encData);
							if (encData != undefined) {
								encData = encData.split(' ').join('+');
							}

							console.log(encData);
							var emailId = getUrlParameter("user");

							var hostId = getUrlParameter("id");
							if (encData == undefined) {
								encData = null;
							}
							if (loginName == undefined) {
								loginName = "LOGIN";
								$('#loginReg').show();
								$('#welcomeReg').hide();
								$('#logOut').hide();
							}
							if (hostId == undefined) {
								hostId = 0;
							}
							var host = host + "?" + "encryptdata=" + encData
									+ "&user=" + loginName + "&id=" + hostId;

							$('#loginName')
									.on(
											'click',
											function() {
												if ($('#loginName').text() == "LOGIN") {
													window.location.href = "/SBMUserManagement/user/login";
												}
											});
							$('#logOut')
									.on(
											'click',
											function() {
												var logOutData = new Object();
												logOutData.token = encData;
												logOutData.emailId = emailId;
												$
														.ajax({
															//url:"http://www.swachhbharaturban.in:8080/SBMUserManagement/login/userlogout",
															//url : "http://localhost:8080/SBMUserManagement/login/userlogout",
															url : "http://183.82.144.250:8080/SBMUserManagement/login/userlogout",
															type : "POST",
															dataType : "json",
															contentType : "application/json",
															data : JSON
																	.stringify(logOutData),
															success : function(
																	data) {
																window.location.href = "/SBMUserManagement/user/login";
															}
														});
												window.location.href = "/SBMUserManagement/user/login";
											});

							if ($('#loginName').text() == "LOGIN") {
								$('#loginReg').show();
								$('#welcomeReg').hide();
								$('#logOut').hide();
							} else {
								$('#loginReg').hide();
								$('#welcomeReg').show();
								$('#logOut').show();
							}
							var masterHost = "masterScreen" + "?" + "encryptdata=" + encData
							+ "&user=" + loginName + "&id=" + hostId +"&screenId=1";
							
							var masterHost2 = "masterScreen" + "?" + "encryptdata=" + encData
							+ "&user=" + loginName + "&id=" + hostId +"&screenId=2";
							
							var masterHost3 = "masterScreen" + "?" + "encryptdata=" + encData
							+ "&user=" + loginName + "&id=" + hostId +"&screenId=3";
							
							var masterHost4 = "masterScreen" + "?" + "encryptdata=" + encData
							+ "&user=" + loginName + "&id=" + hostId +"&screenId=4";

							var masterHost5 = "masterScreen" + "?" + "encryptdata=" + encData
							+ "&user=" + loginName + "&id=" + hostId +"&screenId=5";
							
							var masterHost6 = "masterScreen" + "?" + "encryptdata=" + encData
							+ "&user=" + loginName + "&id=" + hostId +"&screenId=6";
							
							
							
							$('#sbmHomeId').attr("href", host);
							$('#masterscreenRef').attr("href", masterHost);
							$('#masterULB').attr("href", masterHost3);
							$('#masterFinancialYear').attr("href", masterHost2);
							$('#masterSanitation').attr("href", masterHost4);
							$('#sanctionMaster').attr("href", masterHost5);
							$('#stateUtilizMaster').attr("href", masterHost6);
							
							//	if(stateCodeId == undefined){
							window.setTimeout(function() {
								SBMFundRequisitionHandler.init(encData,
										emailId, stateCodeId, userstateName,
										usrRoleName);
							}, 500);
							//}else{

							//}

							$('[data-toggle="tooltip"]').tooltip();

						});
	</script>
</body>

</html>