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
<link rel="stylesheet" href="css/dataTables.bootstrap.css">
<link rel="stylesheet" href="css/dataTables.responsive.css">

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
							<a id="sbmHomeId" href="http://sbmtest.connect2go.in">Home</a>
						</div> -->
						
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
                            <li><a href="#" id='urbanSaniRef'>ULB Master Data</a></li>
                            <li><a href="#" id='finYearRef'>ULB fininacial year</a></li>
                            <li><a href="#" id='stateFinTarRef'>ULB Target Data</a></li>
                             <li><a href="#" id='mstrSanitation'>IHHL Center Share</a></li>
                             <li><a href="#" id="sanctionMastr">Sanction Master</a></li>
                             <li><a href="#" id="stateUtilMaster">State Utilization Master</a></li>
                            </ul>
                    </li>
                    </ul>
                    
            </div>
		</div>
	</div>
	<div class="orange-bg">
	<div class="urbanSanitation">
		<div class="container content-header-bg">
        <div class="row">
            <div class="col-sm-6">
                <h2>View Proposal</h2></div>
            <div class="col-sm-6 text-right">
                <p><a class="btn btn-default" href="#" data-toggle="modal" data-target="#urbanSanitationUpload" role="button"><i class="glyphicon glyphicon-upload"></i> Upload</a> <a class="btn btn-primary" href="#" data-toggle="modal" data-target="#urbanSanitationModal" role="button"><i class="glyphicon glyphicon-plus"></i> Create</a></p>
            </div>
        </div>
    </div>	
	<div class="container content-bg">
        <!-- Example row of columns -->
        <div class="row" id="urbanSanTab">
           
        </div>
    </div>
	</div>
	<div class="urbanfinancialYear">
	 <div class="container content-header-bg">
        <div class="row">
            <div class="col-sm-6">
                <h2>View Proposal</h2></div>
            <div class="col-sm-6 text-right">
                <p><a class="btn btn-default" href="#" data-toggle="modal" data-target="#financialYearUpload" role="button"><i class="glyphicon glyphicon-upload"></i> Upload</a> <a class="btn btn-primary" href="#" data-toggle="modal" data-target="#financialYearModal" role="button"><i class="glyphicon glyphicon-plus"></i> Create</a></p>
            </div>
        </div>
    </div>
    <div class="container content-bg">
        <!-- Example row of columns -->
        <div class="row" id="ubFinYearTab">

        </div>
        </div>
       
	</div>
		 
     <div class="stateFinancialTarget">
       
	 <div class="container content-header-bg">
        <div class="row">
            <div class="col-sm-6">
                <h2>View Proposal</h2></div>
            <div class="col-sm-6 text-right">
                <p><a class="btn btn-default" href="#" data-toggle="modal" data-target="#stateTargetUpload" role="button"><i class="glyphicon glyphicon-upload"></i> Upload</a> <a class="btn btn-primary" href="#" data-toggle="modal" data-target="#stateTargetModal" role="button"><i class="glyphicon glyphicon-plus"></i> Create</a></p>
            </div>
        </div>
    </div>
    <div class="container content-bg">
        <!-- Example row of columns -->
        <div class="row" id="stateTargetTab">
           
        </div>
        </div>
       
        </div>
	
	     <div class="mtrSanitation">
       
	 <div class="container content-header-bg">
        <div class="row">
            <div class="col-sm-6">
                <h2>View Proposal</h2></div>
            <div class="col-sm-6 text-right">
                <p><a class="btn btn-default" href="#" data-toggle="modal" data-target="#masterSanitationUpload" role="button"><i class="glyphicon glyphicon-upload"></i> Upload</a> <a class="btn btn-primary" href="#" data-toggle="modal" data-target="#mstrSanitationModal" role="button"><i class="glyphicon glyphicon-plus"></i> Create</a></p>
            </div>
        </div>
    </div>
    <div class="container content-bg">
        <!-- Example row of columns -->
        <div class="row" id="mtrSanitationTab">
           
        </div>
        </div>
       
        </div>
        
        	     <div class="mtrSanction">
       
	 <div class="container content-header-bg">
        <div class="row">
            <div class="col-sm-6">
                <h2>View Proposal</h2></div>
            <div class="col-sm-6 text-right">
                <p><a class="btn btn-default" href="#" data-toggle="modal" data-target="#masterSanctionUpload" role="button"><i class="glyphicon glyphicon-upload"></i> Upload</a> </p>
            </div>
        </div>
    </div>
    <div class="container content-bg">
        <!-- Example row of columns -->
        <div class="row" id="mtrSanctionTab">
           
        </div>
        </div>
       
        </div>
        
        
                	     <div class="stateUtilMasSection">
       
	 <div class="container content-header-bg">
        <div class="row">
            <div class="col-sm-6">
                <h2>View Proposal</h2></div>
            <div class="col-sm-6 text-right">
                <p><a class="btn btn-default" href="#" data-toggle="modal" data-target="#stateUtilizationUpload" role="button"><i class="glyphicon glyphicon-upload"></i> Upload</a> </p>
            </div>
        </div>
    </div>
    <div class="container content-bg">
        <!-- Example row of columns -->
        <div class="row" id="stateUtilizationTab">
           
        </div>
        </div>
       
        </div>
	
    </div>
    <footer class="text-center">
        <p>&copy; Company 2017</p>
    </footer>
    <!-- Modal -->
    <div class="modal fade" id="urbanSanitationUpload" tabindex="-1" role="dialog" aria-labelledby="urbanSanitationUpload">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Upload ULB Master Data</h4>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row">

                                                                 <div class="col-sm-12">
                                                    <div class="form-group">
                                                        <label>Uplaod</label>
                                                        <input type="file" name="img[]"  accept=".csv" id="urbanSanitationFile" class="file">
                                                        <div class="input-group col-xs-12">
                                                            <input type="text" class="form-control"  disabled placeholder="Upload file">
                                                            <span class="input-group-btn">
        <button class="browse btn btn-primary" type="button"><i class="glyphicon glyphicon-search"></i> Browse</button>
      </span>
                                                        </div>
                                                    </div>
                                                </div>

                        </div>
                    </div>
                    <!-- < /modelbody> -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">CANCEL</button>
                        <button type="button" class="btn btn-success" data-dismiss="modal" id="urbanSanitationUploadSave">SAVE</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Model for Proposal -->
    <!-- Modal -->
    <div class="modal fade" id="urbanSanitationModal" tabindex="-1" role="dialog" aria-labelledby="myModal">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Create ULB Master Data</h4>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row">
                        	<div class="col-sm-4">
                                <div class="form-group">
                                    <label for="">States</label>
                                    <select	id="state_codes" class="form-control state_codes">
										<!-- <option value="7">Delhi</option>
										<option value="IHHL Installment2">IHHL Installment 2</option>
										<option value="CT/PT">CT/PT</option>
										<option value="SWM">SWM</option>
										<option value="IEC">IEC</option>
										<option value="CB&AOE">CB & AOE</option> -->
										
									</select>
                                </div>
                            </div>
                            
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="">City</label>
                                    <select	id="city_codes" class="form-control city_codes">
										<!-- <option value="800443">Delhi-ULB</option>
										<option value="IHHL Installment2">IHHL Installment 2</option>
										<option value="CT/PT">CT/PT</option>
										<option value="SWM">SWM</option>
										<option value="IEC">IEC</option>
										<option value="CB&AOE">CB & AOE</option> -->
										
									</select>
									 <div id="ctySpan" class="alert alert-danger">City is required</div>
                                </div>
                            </div>
                        	
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="">Urban Population</label>
                                    <input type="text" name="urbanPopulation" id="urbanPopulation" class="master-form form-control">
                                    <div id="upSpan" class="alert alert-danger">Urban Population is required</div>
                                    <input type="hidden" name="urbanId" id="urbanId" class="form-control">
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="">Number of House Holds</label>
                                    <input type="text" name="noOfUrbanHouseHolds" id="noOfUrbanHouseHolds" class="master-form form-control">
                                    <div id="noSpan" class="alert alert-danger">Number of House Holds is required</div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="">HH Defecting</label>
                                    <input type="text" name="urbanHHDefecatingOpen" id="urbanHHDefecatingOpen" class="master-form form-control">
                                    <div id="hhdSpan" class="alert alert-danger">HH Defecting is required</div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="">HH Pit Latrines</label>
                                    <input type="text" name="urbanHHshavingPitLaterines" id="urbanHHshavingPitLaterines" class="master-form form-control">
                                    <div id="hpitSpan" class="alert alert-danger">HH Pit Latrines is required</div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="">Solid Waste Generates</label>
                                    <input type="text" name="solidWasteGenerated" id="solidWasteGenerated" class="master-form form-control">
                                     <div id="swSpan" class="alert alert-danger">Solid Waste Generates is required</div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="">HH in Sanitory</label>
                                    <input type="text" name="UrbanHHswithInsanitaryLaterines" id="UrbanHHswithInsanitaryLaterines" class="master-form form-control">
                                    <div id="hhisSpan" class="alert alert-danger">HH in Sanitory is required</div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="">MSW Collections</label>
                                    <input type="text" name="MSWCollected" id="MSWCollected" class="master-form form-control">
                                    <div id="mswSpan" class="alert alert-danger">MSW Collections is required</div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="">MSW Transports</label>
                                    <input type="text" name="mswTransported" id="mswTransported" class="master-form form-control">
                                    <div id="msw1Span" class="alert alert-danger">MSW Transports is required</div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="">MSW Treates</label>
                                    <input type="text" name="mswTreated" id="mswTreated" class="master-form form-control">
                                    <div id="msw2Span" class="alert alert-danger">MSW Treates is required</div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="">Census Year</label>
                                    <input type="text" name="censusYear" id="censusYear" class="master-form form-control">
                                    <div id="censeSpan" class="alert alert-danger">Census Year is required</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- < /modelbody> -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancle</button>
                        <button type="button" class="btn btn-success"  id="urbanSanitationSave">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <!--  Financial Year Modal -->
    <!-- Upload Modal -->
     <div class="modal fade" id="financialYearUpload" tabindex="-1" role="dialog" aria-labelledby="myModalUpload">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Upload ULB Master Data</h4>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row">

                                                                 <div class="col-sm-12">
                                                    <div class="form-group">
                                                        <label>Uplaod</label>
                                                        <input type="file" id="finYearUploadFile" accept=".csv" name="img[]" class="file">
                                                        <div class="input-group col-xs-12">
                                                            <input type="text" class="form-control" disabled placeholder="Upload file">
                                                            <span class="input-group-btn">
        <button class="browse btn btn-primary" type="button"><i class="glyphicon glyphicon-search"></i> Browse</button>
      </span>
                                                        </div>
                                                    </div>
                                                </div>

                        </div>
                    </div>
                    <!-- < /modelbody> -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">CANCEL</button>
                        <button type="button" class="btn btn-success" data-dismiss="modal" id="finYearUploadSave">SAVE</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
        <!-- Model for Proposal -->
    <!-- Modal -->
    <div class="modal fade" id="financialYearModal" tabindex="-1" role="dialog" aria-labelledby="myModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Create Finacial Year Target</h4>
                </div>
                <form>
                    <div class="modal-body">
                    	<div class="col-sm-6">
                                <div class="form-group">
                                    <label for="">States</label>
                                    <select	id="fin_year_state_codes" class="form-control state_codes">
										<!-- <option value="7">Delhi</option>
										<option value="IHHL Installment2">IHHL Installment 2</option>
										<option value="CT/PT">CT/PT</option>
										<option value="SWM">SWM</option>
										<option value="IEC">IEC</option>
										<option value="CB&AOE">CB & AOE</option> -->
										
									</select>
                                </div>
                            </div>
                            
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="">City</label>
                                    <select	id="fin_year_city_codes" class="form-control city_codes">
										<!-- <option value="800443">Delhi-ULB</option>
										<option value="IHHL Installment2">IHHL Installment 2</option>
										<option value="CT/PT">CT/PT</option>
										<option value="SWM">SWM</option>
										<option value="IEC">IEC</option>
										<option value="CB&AOE">CB & AOE</option> -->
										
									</select>
									<div id="citySpan" class="alert alert-danger">City is required</div>
                                </div>
                            </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="">Urban HHs defecating on open</label>
                                    <input type="text" name="urbanHHsDefecatingonOpen" id="urbanHHsDefecatingonOpen" class="master-form form-control">
                                    <div id="openSpan" class="alert alert-danger">Urban HHs defecating on open is required</div>
                                    <input type="hidden" name="finYearId" id="finYearId" class="form-control">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="">Urban HHs having Pit Laterines</label>
                                    <input type="text" name="urbanHHsHavingPitLaterines" id="urbanHHsHavingPitLaterines" class="master-form form-control">
                                    <div id="pitSpan" class="alert alert-danger">Urban HHs having Pit Laterines is required</div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="">Urban HHs with Insanitary Laterines</label>
                                    <input type="text" name="UrbanHHswithInsanitaryLaterinesFin" id="UrbanHHswithInsanitaryLaterinesFin" class="master-form form-control">
                                    <div id="lfinSpan" class="alert alert-danger">Urban HHs with Insanitary Laterines is required</div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="">Total IHHTs required by state</label>
                                    <input type="text" name="totalIHHTsRequiredbyState" id="totalIHHTsRequiredbyState" class="master-form form-control">
                                     <div id="ihhlSSpan" class="alert alert-danger">Total IHHTs required by state is required</div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="">Total CT required</label>
                                    <input type="text" name="totalCTRequired" id="totalCTRequired" class="master-form form-control">
                                     <div id="ctSpan" class="alert alert-danger">Total CT Requires is required</div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="">Total PT required</label>
                                    <input type="text" name="totalPTRequired" id="totalPTRequired" class="master-form form-control">
                                    <div id="ptSpan" class="alert alert-danger">Total PT Requires is required</div>
                                </div>
                            </div>
                                                        <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="">Financial Year</label>
                                    <input type="text" name="financialYear" id="financialYear" class="master-form form-control">
                                    <div id="fySpan" class="alert alert-danger">Financial Year is required</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- < /modelbody> -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancle</button>
                        <button type="button" class="btn btn-success"  id="urbanFinYearSave">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <!--  State Financial Target Modal -->
    
    
     <div class="modal fade" id="stateTargetUpload" tabindex="-1" role="dialog" aria-labelledby="myModalUpload">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Upload ULB Master Data</h4>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row">

                                                                 <div class="col-sm-12">
                                                    <div class="form-group">
                                                        <label>Upload</label>
                                                        <input type="file" id="stateTargetUploadFile" accept=".csv" name="img[]" class="file">
                                                        <div class="input-group col-xs-12">
                                                            <input type="text" class="form-control" disabled placeholder="Upload file">
                                                            <span class="input-group-btn">
        <button class="browse btn btn-primary" type="button"><i class="glyphicon glyphicon-search"></i> Browse</button>
      </span>
                                                        </div>
                                                    </div>
                                                </div>

                        </div>
                    </div>
                    <!-- < /modelbody> -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">CANCEL</button>
                        <button type="button" class="btn btn-success" data-dismiss="modal" id="stateTarUploadSave">SAVE</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
        <!-- Model for Proposal -->
    <!-- Modal -->
    <div class="modal fade" id="stateTargetModal" tabindex="-1" role="dialog" aria-labelledby="myModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Create Finacial Target</h4>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row">
                        	<div class="col-sm-4">
                                <div class="form-group">
                                    <label for="">States</label>
                                    <select	id="stateTar_state_codes" class="form-control state_codes">
										<!-- <option value="7">Delhi</option>
										<option value="IHHL Installment2">IHHL Installment 2</option>
										<option value="CT/PT">CT/PT</option>
										<option value="SWM">SWM</option>
										<option value="IEC">IEC</option>
										<option value="CB&AOE">CB & AOE</option> -->
										
									</select>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="">Heads</label>
                                    <select	id="heads" class="form-control state_codes">
										<option value="IHHL Installment2">IHHL Installment 2</option>
										<option value="CT/PT">CT/PT</option>
										<option value="SWM Installment1">SWM Installment 1</option>
										<option value="SWM Installment2">SWM Installment 2</option>
										<option value="IEC">IEC</option>
										<option value="CB&AOE">CB & AOE</option>
										
									</select>
									<input type="hidden" name="stateTarId" id="stateTarId" class="form-control">
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="">Total Target Funds</label>
                                    <input type="text" name="totalTargetFunds" id="totalTargetFunds" class="master-form form-control">
                                    <div id="ttfSpan" class="alert alert-danger">Total Target Funds is required</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <!-- < /modelbody> -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancle</button>
                        <button type="button" class="btn btn-success"  id="stateTargetSave">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Master Sanitation Modal -->
    
        <div class="modal fade" id="masterSanitationUpload" tabindex="-1" role="dialog" aria-labelledby="myModalUpload">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Upload ULB Master Data</h4>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row">

                                                                 <div class="col-sm-12">
                                                    <div class="form-group">
                                                        <label>Upload</label>
                                                        <input type="file" id="mstrSanitationUploadFile" accept=".csv" name="img[]" class="file">
                                                        <div class="input-group col-xs-12">
                                                            <input type="text" class="form-control" disabled placeholder="Upload file">
                                                            <span class="input-group-btn">
        <button class="browse btn btn-primary" type="button"><i class="glyphicon glyphicon-search"></i> Browse</button>
      </span>
                                                        </div>
                                                    </div>
                                                </div>

                        </div>
                    </div>
                    <!-- < /modelbody> -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">CANCEL</button>
                        <button type="button" class="btn btn-success" data-dismiss="modal" id="mstrSanitationUploadSave">SAVE</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    
        <!-- Modal -->
    <div class="modal fade" id="mstrSanitationModal" tabindex="-1" role="dialog" aria-labelledby="myModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Create Sanitation</h4>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row">
                        	<div class="col-sm-6">
                                <div class="form-group">
                                    <label for="">States</label>
                                    <select	id="mstr_sani_state_codes" class="form-control state_codes">
									</select>
									<input type="hidden" name="mstrSanId" id="mstrSanId" class="form-control">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="">Center Share Amount</label>
                                    <input type="text" name="centerShareAmount" id="centerShareAmount" class="master-form form-control">
                                    <div id="csaSpan" class="alert alert-danger">Center Share Amount is required</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                    </div>
                    <!-- < /modelbody> -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancle</button>
                        <button type="button" class="btn btn-success"  id="mstrSanitationSave">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    
    <!-- end of Master Sanitation -->
    
     <!-- Master Sanitation Modal -->
    
        <div class="modal fade" id="masterSanctionUpload" tabindex="-1" role="dialog" aria-labelledby="myModalUpload">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Upload Sanction Master Data</h4>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row">

                                                                 <div class="col-sm-12">
                                                    <div class="form-group">
                                                        <label>Upload</label>
                                                        <input type="file" id="mstrSanctionUploadFile" accept=".csv" name="img[]" class="file">
                                                        <div class="input-group col-xs-12">
                                                            <input type="text" class="form-control" disabled placeholder="Upload file">
                                                            <span class="input-group-btn">
        <button class="browse btn btn-primary" type="button"><i class="glyphicon glyphicon-search"></i> Browse</button>
      </span>
                                                        </div>
                                                    </div>
                                                </div>

                        </div>
                    </div>
                    <!-- < /modelbody> -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">CANCEL</button>
                        <button type="button" class="btn btn-success" data-dismiss="modal" id="mstrSanctionUploadSave">SAVE</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--  end of sanction master popup -->
    
         <!-- State Utilization Master Modal -->
    
        <div class="modal fade" id="stateUtilizationUpload" tabindex="-1" role="dialog" aria-labelledby="myModalUpload">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">State Utilization Master Data</h4>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row">

                                                                 <div class="col-sm-12">
                                                    <div class="form-group">
                                                        <label>Upload</label>
                                                        <input type="file" id="stateUtilUploadFile" accept=".csv" name="img[]" class="file">
                                                        <div class="input-group col-xs-12">
                                                            <input type="text" class="form-control" disabled placeholder="Upload file">
                                                            <span class="input-group-btn">
        <button class="browse btn btn-primary" type="button"><i class="glyphicon glyphicon-search"></i> Browse</button>
      </span>
                                                        </div>
                                                    </div>
                                                </div>

                        </div>
                    </div>
                    <!-- < /modelbody> -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">CANCEL</button>
                        <button type="button" class="btn btn-success" data-dismiss="modal" id="stateUtilUploadSave">SAVE</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--  end of sanction master popup -->
    
    	<div class="modal fade" id="infoPopup" role="dialog"
					style="z-index: 9999">mtrSanitationTab
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
								<button type="button" class="btn btn-primary infoOk"
									data-dismiss="modal">Ok</button>
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
	<script src="js/fundRequisitionMaster.js"></script>
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
							console.log(emailId);
							var hostId = getUrlParameter("id");
							console.log(hostId);
							var screenId = getUrlParameter("screenId");
							console.log(screenId);
							
							
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
							$('#sbmHomeId').attr("href", host);
							//	if(stateCodeId == undefined){
							
							//}else{

							//}

							$('[data-toggle="tooltip"]').tooltip();
							
							$("#urbanSaniRef").click(function(){
								$(".urbanSanitation").show();
								$(".urbanfinancialYear,.stateFinancialTarget").hide();
								
								$.ajax({
									url:"/SBMFundRequisition/fund/read/getCitySanitations",
									type:"POST",
									headers: headerData,
									dataType:'json',
									contentType:"application/json",
									success:function(data){
										masterResultData = data;
									},
									error:function(data){
										console.log(data);
									}
								});
							});
							
							$("#finYearRef").click(function(){
								$(".urbanfinancialYear").show();
								$(".urbanSanitation,.stateFinancialTarget").hide();
							});
							
							$("#stateFinTarRef").click(function(){
								$(".stateFinancialTarget").show();
								$(".urbanSanitation,.urbanfinancialYear").hide();
							});
							SBMFundRequisitionMasterHandler.init(screenId,encData,emailId);

						});
	</script>
</body>

</html>