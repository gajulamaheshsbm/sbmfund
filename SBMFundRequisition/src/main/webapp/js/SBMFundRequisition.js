var stateCode;
var nmdUser=false;
var headerData= new Object();
var editProposal ;
var swmSanAmount;
var swmUtilAmount;
var SBMFundRequisitionHandler={
		init:function(encData,emailId,stateCodeId,userstateName,usrRoleName){
			if(usrRoleName == "National Mission Director"){
				nmdUser=true;
			}else{
				nmdUser=false;
			}
			console.log(stateCodeId);
			stateCode=stateCodeId;
			headerData.Authorization= encData;
			headerData.emailId=emailId;
			SBMFundRequisitionHandler.getProposalByState(userstateName);
			SBMFundRequisitionHandler.createProposalByState();
			SBMFundRequisitionHandler.editProposalByState();
			SBMFundRequisitionHandler.sanctionProposalByState();
			SBMFundRequisitionHandler.utilizationByState();
		},
		getProposalByState:function(userstateName){
			if(nmdUser == true){
				$('.createProposal').hide();
				$.ajax({
					url:"/SBMFundRequisition/fund/read/getAllProposals",
					type:"POST",
					headers: headerData,
					dataType:'json',
					contentType:"application/json",
					success:function(data){
						console.log(data)
						viewSanctionProposals(data);
					}
				});
			}else{
				$('.userstateName').html("<h2 style='text-align: center;'>State Name:"+userstateName+"</h2>");
				$('.createProposal').show();
				$.ajax({
					url:"/SBMFundRequisition/fund/read/getProposalByState?stateCode="+stateCode,
					type:"POST",
					headers: headerData,
					dataType:'json',
					contentType:"application/json",
					success:function(data){
						console.log(data)
						getProposalsByStateTable(data);
					}
				});
			}
			
			
			
		},
		createProposalByState:function(){
			$('.expenseHeads').on('change',function(){
				if($(this).val()== "IHHL Installment2"){
					$('.financialDiv').show();
				}else{
					$('.financialDiv').hide();
				}
			});
			var swm1GrandTotal=0;
			$(document).on('focusout','.swmtotalProjectCost',function(){
				$('.well .subProDetailsdiv').each(function(){
					swm1GrandTotal = swm1GrandTotal+parseInt($(this).closest('.row').find('.swmtotalProjectCost').val(), 10);
				});
				$('.swmGrandTotal').val(swm1GrandTotal);
				swm1GrandTotal=0;
			});
			
			$('.addSubProject').on('click',function(){
				
				$(this).parent('.row').prepend("<div class=\"subProDetailsdiv\">	<div class=\"row\">	<div class=\"col-sm-4\">" +
						"<div class=\"form-group\">	<label for=\"\">Sub Project Name  (cr)</label> " +
						"<input	type=\"text\" name=\"\" class=\"form-control swmSubProjectName\"></div>	</div>" +
						"<div class=\"col-sm-4\">	<div class=\"form-group\"><label for=\"\">Project Description</label>" +
								"<textarea class=\"form-control swmdescription\" rows=\"4\"></textarea>" +
								"</div>	</div><div class=\"col-sm-4\"><div class=\"form-group\">" +
								"<label for=\"\">Total Sub Project Cost (cr)</label>" +
								" <input type=\"text\" name=\"\" class=\"form-control swmtotalProjectCost\"></div></div>" +
								"</div><div class=\"row\"><div class=\"col-sm-4\"><div class=\"form-group\">" +
								"<label for=\"\">Central Assistance (cr)</label>" +
								" <input type=\"text\" name=\"\" class=\"form-control swmCentralAssiatance\"></div>	</div>" +
								"<div class=\"col-sm-4\"><div class=\"form-group\">	<label for=\"\">State Contribution (cr)</label>" +
								" <input type=\"text\" name=\"\" class=\"form-control swmStateContribution\"></div>	</div>" +
								"<div class=\"col-sm-4\"><div class=\"form-group\"><label for=\"\">Others (cr)</label>" +
								"<input	type=\"text\" name=\"\" class=\"form-control swmOthers\"></div></div></div></div>");
			
			});
			$('.swm2addSubProject').on('click',function(){
				$(this).parent('.row').prepend("<div class=\"swm2subProDetailsdiv\">	<div class=\"row\">	<div class=\"col-sm-4\">" +
						"<div class=\"form-group\">	<label for=\"\">Sub Project Name  (cr)</label> " +
						"<input	type=\"text\" name=\"\" class=\"form-control swm2SubProjectName\" value="+val.swmSubProjectName+"></div>	</div>" +
						"<div class=\"col-sm-4\">	<div class=\"form-group\"><label for=\"\">Project Description</label>" +
								"<textarea class=\"form-control swm2description\" rows=\"4\" >"+val.description+"</textarea>" +
								"</div>	</div><div class=\"col-sm-4\"><div class=\"form-group\">" +
								"<label for=\"\">Total Sub Project Cost (cr)</label>" +
								" <input type=\"text\" name=\"\" class=\"form-control swm2totalProjectCost\"  value="+val.totalProjectCost+"></div></div>" +
								"</div><div class=\"row\"><div class=\"col-sm-4\"><div class=\"form-group\">" +
								"<label for=\"\">Central Assistance (cr)</label>" +
								" <input type=\"text\" name=\"\" class=\"form-control swm2CentralAssiatance\"  value="+val.centralAssistanceSought+"></div>	</div>" +
								"<div class=\"col-sm-4\"><div class=\"form-group\">	<label for=\"\">State Contribution (cr)</label>" +
								" <input type=\"text\" name=\"\" class=\"form-control swm2StateContribution\"  value="+val.stateContribution+"></div>	</div>" +
								"<div class=\"col-sm-4\"><div class=\"form-group\"><label for=\"\">Others (cr)</label>" +
								"<input	type=\"text\" name=\"\" class=\"form-control swm2Others\"  value="+val.others+"></div></div></div></div>");
			
		
			
			});
			
				
			$('.createProposal').on('click',function(){
				 $('.saveProposal').show();
				 $('.withDrawProposal').hide();
				 $('.ihhl1dropdown, .swmdropdown').html('');
				 $('.ihhl1dropdown, .swmdropdown').append("<option selected='selected' value='Select' >select</option>")
					
				var stateDetails= new Object();
				stateDetails.stateCode=stateCode;
				loadPropsalDetails(stateDetails);
				$.ajax({
					url:"/SBMFundRequisition/fund/read/getSWMValidDetailsByState",
					type:"POST",
					dataType:'json',
					headers: headerData,
					contentType:"application/json",
					data:JSON.stringify(stateDetails),
					success:function(data){
						console.log(data.data);
						swmSanAmount= data.data.totalSanAmount;
						swmUtilAmount=data.data.totalUtilAmount;
						
					}
				});
				$.ajax({
					url:"/SBMFundRequisition/fund/read/getIhhlInstalment1Details",
					type:"POST",
					dataType:'json',
					headers: headerData,
					contentType:"application/json",
					data:JSON.stringify(stateDetails),
					success:function(data){
						console.log(data.data);
						$.each(data.data,function(key,val){
							$('.ihhl1dropdown').append("<option value="+val+">"+val+"</option>")
						});
					
					}
				});
				
				$.ajax({
					url:"/SBMFundRequisition/fund/read/getSWMInstalment1Details",
					type:"POST",
					dataType:'json',
					headers: headerData,
					contentType:"application/json",
					data:JSON.stringify(stateDetails),
					success:function(data){
						console.log(data.data);
						$.each(data.data,function(key,val){
							$('.swmdropdown').append("<option value="+val+">"+val+"</option>")
						});
					
					}
				});
			});
			$('.infoOk').on('click', function(){
				$('#infoPopup').hide();
			});
			$('.iHHL1requestAmount, .iHHL1ptpAmount').on('change',function(){
				var sanAmount= parseInt($('.iHHL1LastSanAmount').val());
				var utilAmount= parseInt($('.iHHL1ProposedUtilizedFunds').val());
				var percentage = (utilAmount*100)/sanAmount;
				console.log(percentage);
				if(percentage >= 75){
					
				}else{
					$('#infoPopup .modal-body .row').html("<p>Last Utilization must be greater than 75% of Last Sanctioned Amount to create  CB & AOE Proposal</p>")
					$('#infoPopup').modal();
					$('#infoPopup').show();
					$('.iHHL1requestAmount , .iHHL1ptpAmount').val('');
				}
			});
			$('.iHHL2requestAmount, .iHHL2ptpAmount').on('change',function(){
				var sanAmount= parseInt($('.iHHL2LastSanAmount').val());
				var utilAmount= parseInt($('.iHHL2ProposedUtilizedFunds').val());
				var percentage = (utilAmount*100)/sanAmount;
				console.log(percentage);
				if(percentage >= 75){
					
				}else{
					$('#infoPopup .modal-body .row').html("<p>Last Utilization must be greater than 75% of Last Sanctioned Amount to create  CB & AOE Proposal</p>")
					$('#infoPopup').modal();
					$('#infoPopup').show();
					$('.iHHL2requestAmount , .iHHL2ptpAmount').val('');
				}
			});
			$('.cTPTrequestAmount, .cTPTptpAmount').on('change',function(){
				var sanAmount= parseInt(swmSanAmount);
				var utilAmount= parseInt(swmUtilAmount);
				var percentage = (utilAmount*100)/sanAmount;
				console.log(percentage);
				if(percentage >= 75){
					
				}else{
					$('#infoPopup .modal-body .row').html("<p>Last Utilization must be greater than 75% of Last Sanctioned Amount to create CT/PT Proposal</p>")
					$('#infoPopup').modal();
					$('#infoPopup').show();
					$('.cTPTrequestAmount , .cTPTptpAmount').val('');
				}
			});
			$('.swmrequestAmount, .swmptpAmount').on('change',function(){
				var sanAmount= parseInt($('.swmLastSanAmount').val());
				var utilAmount= parseInt($('.swmProposedUtilizedFunds').val());
				var percentage = (utilAmount*100)/sanAmount;
				console.log(percentage);
				if(percentage >= 75){
					
				}else{
					$('#infoPopup .modal-body .row').html("<p>Last Utilization must be greater than 75% of Last Sanctioned Amount to create SWM Proposal</p>")
					$('#infoPopup').modal();
					$('#infoPopup').show();
					$('.swmrequestAmount , .swmptpAmount').val('');
				}
			});
			$('.iecrequestAmount, .iecptpAmount').on('change',function(){
				var sanAmount= parseInt($('.iecLastSanAmount').val());
				var utilAmount= parseInt($('.iecProposedUtilizedFunds').val());
				var percentage = (utilAmount*100)/sanAmount;
				console.log(percentage);
				if(percentage >= 75){
					
				}else{
					$('#infoPopup .modal-body .row').html("<p>Last Utilization must be greater than 75% of Last Sanctioned Amount to create IEC Proposal</p>")
					$('#infoPopup').modal();
					$('#infoPopup').show();
					$('.iecrequestAmount , .iecptpAmount').val('');
				}
			});
			$('.cbAoerequestAmount, .cbAoeptpAmount').on('change',function(){
				var sanAmount= parseInt($('.cbAoeLastSanAmount').val());
				var utilAmount= parseInt($('.cbAoeProposedUtilizedFunds').val());
				var percentage = (utilAmount*100)/sanAmount;
				console.log(percentage);
				if(percentage >= 75){
					
				}else{
					$('#infoPopup .modal-body .row').html("<p>Last Utilization must be greater than 75% of Last Sanctioned Amount to create  CB & AOE Proposal</p>")
					$('#infoPopup').modal();
					$('#infoPopup').show();
					$('.cbAoerequestAmount , .cbAoeptpAmount').val('');
				}
			});
			
			var submitProposal;
			
			$('.saveProposal').on('click',function(){
				var  stateIhhlList= [];
				var  stateSWMList= [];
				
				var proposeMaster = new Object();
				
				if(editProposal != null){
					proposeMaster= editProposal;
					console.log(proposeMaster);
				}
				
				var iHHL1dapFile=$("#iHHL1DetailedUpload")[0].files[0];
				var iHHL1ucFile=$("#iHHL1ucUpload")[0].files[0];
				var iHHL1ppFile=$("#iHHL1progressUpload")[0].files[0];
				if(($('.iHHL1ptpAmount').val().length >= 1 ) && ($('.iHHL1tpAoumnt').val().length >= 1 ) && ($('.iHHL1requestAmount').val().length >= 1 ) ){
					var stateIhhl= new Object();
					var stateCodeData= new Object();
					stateCodeData.stateCode=stateCode;
					stateIhhl.StateCode=stateCodeData;
					stateIhhl.expenseHead="IHHL Installment1"
					//stateIhhl.proposalName = $('.proposalName').val();
					stateIhhl.physicalProposalTarget=$('.iHHL1ptpAmount').val();
					stateIhhl.totalProposalAmount=$('.iHHL1tpAoumnt').val();
					stateIhhl.requestFundAmount=$('.iHHL1requestAmount').val();
					stateIhhl.remarks=$('.iHHL1Remarks').val();
					stateIhhl.detailedActionPlanRefNo= $('.iHHL1dapRefNo').val();
					stateIhhl.ucCertificateRefNO= $('.iHHL1ucRefNo').val();
				//	proposalMasterData.shpcApprovalRefNO= $('.shpcRefNo').val();
					//proposalMasterData.status="validate";
					stateIhhl.financialYear=$('.financialYear').val();
					if(editProposal !=null){
						$.each(editProposal.stateIHHL,function(key,val){
							if(val.expenseHead == "IHHL Installment1" ){
								stateIhhl.Id= val.Id
								stateIhhl.detailedActionPlanName = val.detailedActionPlanName;
								stateIhhl.detailedActionPlanPath=val.detailedActionPlanPath;
								stateIhhl.ucCertificateName=val.ucCertificateName;
								stateIhhl.ucCertificatePath=val.ucCertificatePath;
								stateIhhl.progressPhotoName=val.progressPhotoName;
								stateIhhl.progressPhotoPath=val.progressPhotoPath;
								
							}
						});
					}
					stateIhhlList.push(stateIhhl);
					if(iHHL1dapFile == undefined || iHHL1ucFile == undefined || iHHL1ppFile == undefined){
						proposeMaster.status="Created";
					}else{
						proposeMaster.status="Saved";
					}
				
					
					
				}
				var iHHL2dapFile=$("#iHHL2DetailedUpload")[0].files[0];
				var iHHL2ucFile=$("#iHHL2ucUpload")[0].files[0];
				var iHHL2ppFile=$("#iHHL2progressUpload")[0].files[0];
				var iHHL2fpFile=$("#financialUpload")[0].files[0];
				if(($('.iHHL2ptpAmount').val().length >= 1 ) && ($('.iHHL2tpAoumnt').val().length >= 1 ) && ($('.iHHL2requestAmount').val().length >= 1 )){
					var stateIhhl= new Object();
					var stateCodeData= new Object();
					stateCodeData.stateCode=stateCode;
					stateIhhl.StateCode=stateCodeData;
					stateIhhl.expenseHead="IHHL Installment2";
					//stateIhhl.proposalName = $('.proposalName').val();
					stateIhhl.physicalProposalTarget=$('.iHHL2ptpAmount').val();
					stateIhhl.totalProposalAmount=$('.iHHL2tpAoumnt').val();
					stateIhhl.requestFundAmount=$('.iHHL2requestAmount').val();
					stateIhhl.remarks=$('.iHHL2Remarks').val();
					stateIhhl.detailedActionPlanRefNo= $('.iHHL2dapRefNo').val();
					stateIhhl.ucCertificateRefNO= $('.iHHL2ucRefNo').val();
					//proposalMasterData.shpcApprovalRefNO= $('.shpcRefNo').val();
					//proposalMasterData.status="validate";
					stateIhhl.financialYear=$('.financialYear').val();
					if(editProposal !=null){
						$.each(editProposal.stateIHHL,function(key,val){
							if(val.expenseHead == "IHHL Installment2" ){
								stateIhhl.Id= val.Id
								stateIhhl.detailedActionPlanName = val.detailedActionPlanName;
								stateIhhl.detailedActionPlanPath=val.detailedActionPlanPath;
								stateIhhl.ucCertificateName=val.ucCertificateName;
								stateIhhl.ucCertificatePath=val.ucCertificatePath;
								stateIhhl.progressPhotoName=val.progressPhotoName;
								stateIhhl.progressPhotoPath=val.progressPhotoPath;
								stateIhhl.financialProgressIhhlContructedName=val.financialProgressIhhlContructedName;
								stateIhhl.financialProgressIhhlContructedPath=val.financialProgressIhhlContructedPath;
								
							}
						});
					}
					stateIhhlList.push(stateIhhl);
					if(iHHL2dapFile == undefined || iHHL2ucFile == undefined || iHHL2ppFile == undefined){
						proposeMaster.status="Created";
					}else{
						proposeMaster.status="Saved";
					}
				}
				proposeMaster.stateIHHL=stateIhhlList;
				var ctptdapFile=$("#cTPTDetailedUpload")[0].files[0];
				var ctptucFile=$("#cTPTucUpload")[0].files[0];
				var ctptppFile=$("#cTPTprogressUpload")[0].files[0];
				
				
				if(($('.cTPTtotalProjectCost').val().length >= 1 ) && ($('.cTPTptpAmount').val().length >= 1 ) && ($('.ctptCentralAssiatance').val().length >= 1 )){
					var stateCTPT= new Object();
					var stateCodeData= new Object();
					stateCodeData.stateCode=stateCode;
					stateCTPT.StateCode=stateCodeData;
					stateCTPT.expenseHead="CT/PT";
					//stateCTPT.proposalName = $('.proposalName').val();
					stateCTPT.physicalProposalTarget=$('.cTPTptpAmount').val();
					stateCTPT.totalProjectCost=$('.cTPTtotalProjectCost').val();
					stateCTPT.centralAssistanceSought=$('.ctptCentralAssiatance').val();
					stateCTPT.stateContribution=$('.ctptStateContribution').val();
					stateCTPT.others=$('.ctptOthers').val();
					stateCTPT.description=$('.cTPTDescription').val();
					stateCTPT.detailedActionPlanRefNo= $('.cTPTdapRefNo').val();
					stateCTPT.ucCertificateRefNO= $('.cTPTucRefNo').val();
					//proposalMasterData.shpcApprovalRefNO= $('.shpcRefNo').val();
					//proposalMasterData.status="validate";
					stateCTPT.financialYear=$('.financialYear').val();
					if(editProposal !=null){
						//$.each(editProposal.proposalHeadMaster,function(key,val){
							if(editProposal.stateCTPT != undefined ){
								stateCTPT.Id= val.Id
								stateCTPT.detailedActionPlanName = editProposal.stateCTPT.detailedActionPlanName;
								stateCTPT.detailedActionPlanPath=editProposal.stateCTPT.detailedActionPlanPath;
								stateCTPT.ucCertificateName=editProposal.stateCTPT.ucCertificateName;
								stateCTPT.ucCertificatePath=editProposal.stateCTPT.ucCertificatePath;
								stateCTPT.progressPhotoName=editProposal.stateCTPT.progressPhotoName;
								stateCTPT.progressPhotoPath=editProposal.stateCTPT.progressPhotoPath;
								
							}
						//});
					}
					
					proposeMaster.stateCTPT =stateCTPT;
					
					if(ctptdapFile == undefined || ctptucFile == undefined || ctptppFile == undefined){
						proposeMaster.status="Created";
					}else{
						proposeMaster.status="Saved";
					}
				}
				
			
				
				var swmdapFile=$("#swmDetailedUpload")[0].files[0];
				var swmucFile=$("#swmucUpload")[0].files[0];
				var swmppFile=$("#swmprogressUpload")[0].files[0];
				
				if( ($('.swmtotalProjectCost').val().length >= 1 ) && ($('.swmCentralAssiatance').val().length >= 1 )){
					var stateSWM= new Object();
					var stateCodeData= new Object();
					stateCodeData.stateCode=stateCode;
					stateSWM.StateCode=stateCodeData;
					stateSWM.expenseHead="SWM Installment1";
					//stateSWM.proposalName = $('.proposalName').val();
					/*if($('.swmptpAmount').val() > 0){
						stateSWM.physicalProposalTarget=$('.swmptpAmount').val();
					}else{
						stateSWM.physicalProposalTarget=0
					}*/
					var swmInstall1SubList=[];
					$('.well .subProDetailsdiv').each(function(){
						var SWMSubProjects = new Object();
						SWMSubProjects.swmSubProjectName= $(this).closest('.row').find('.swmSubProjectName').val();
						SWMSubProjects.description= $(this).closest('.row').find('.swmdescription').val();
						SWMSubProjects.totalProjectCost= $(this).closest('.row').find('.swmtotalProjectCost').val();
						SWMSubProjects.centralAssistanceSought= $(this).closest('.row').find('.swmCentralAssiatance').val();
						SWMSubProjects.stateContribution= $(this).closest('.row').find('.swmStateContribution').val();
						SWMSubProjects.others= $(this).closest('.row').find('.swmOthers').val();
						swmInstall1SubList.push(SWMSubProjects);
						console.log(SWMSubProjects);
					});
					console.log(swmInstall1SubList);
					stateSWM.swmsubprojetcs=swmInstall1SubList;
					stateSWM.totalProjectCost=$('.swmGrandTotal').val();
					stateSWM.centralAssistanceSought=$('.swmGrandCentralAssisTotal').val();
					stateSWM.stateContribution=$('.swmGrandStateContriTotal').val();
					stateSWM.others=$('.swmGrandOthersCostTotal').val();
					stateSWM.detailedActionPlanRefNo= $('.swmdapRefNo').val();
					stateSWM.ucCertificateRefNO= $('.swmucRefNo').val();
					//proposalMasterData.shpcApprovalRefNO= $('.shpcRefNo').val();
					//proposalMasterData.status="validate";
					stateSWM.financialYear=$('.financialYear').val();
					if(editProposal !=null){
						$.each(editProposal.stateSWM,function(key,val){
							if(val.expenseHead == "SWM Installment1" ){
								stateSWM.Id= val.Id
								stateSWM.detailedActionPlanName = val.detailedActionPlanName;
								stateSWM.detailedActionPlanPath=val.detailedActionPlanPath;
								stateSWM.ucCertificateName=val.ucCertificateName;
								stateSWM.ucCertificatePath=val.ucCertificatePath;
								stateSWM.progressPhotoName=val.progressPhotoName;
								stateSWM.progressPhotoPath=val.progressPhotoPath;
								
							}
						});
					}
					
					stateSWMList.push(stateSWM);
					if(swmdapFile == undefined || swmucFile == undefined || swmppFile == undefined){
						proposeMaster.status="Created";
					}else{
						proposeMaster.status="Saved";
					}
				}
				
				var swm2dapFile=$("#swm2DetailedUpload")[0].files[0];
				var swm2ucFile=$("#swm2ucUpload")[0].files[0];
				var swm2ppFile=$("#swm2progressUpload")[0].files[0];
				
				if( ($('.swm2totalProjectCost').val().length >= 1 ) && ($('.swm2CentralAssiatance').val().length >= 1 )){
					var stateSWM= new Object();
					var stateCodeData= new Object();
					stateCodeData.stateCode=stateCode;
					stateSWM.StateCode=stateCodeData;
					stateSWM.expenseHead="SWM Installment2";
					//stateSWM.proposalName = $('.proposalName').val();
					/*if($('.swmptpAmount').val() > 0){
						stateSWM.physicalProposalTarget=$('.swmptpAmount').val();
					}else{
						stateSWM.physicalProposalTarget=0
					}*/
					var swmInstall1SubList=[];
					$('.well .swm2subProDetailsdiv').each(function(){
						var SWMSubProjects = new Object();
						SWMSubProjects.swmSubProjectName=$(this).closest('.row').find('.swm2SubProjectName').val();
						SWMSubProjects.description= $(this).closest('.row').find('.swm2description').val();
						SWMSubProjects.totalProjectCost= $(this).closest('.row').find('.swm2totalProjectCost').val();
						SWMSubProjects.centralAssistanceSought= $(this).closest('.row').find('.swm2CentralAssiatance').val();
						SWMSubProjects.stateContribution= $(this).closest('.row').find('.swm2StateContribution').val();
						SWMSubProjects.others= $(this).closest('.row').find('.swm2Others').val();
						swmInstall1SubList.push(SWMSubProjects);
					});
					stateSWM.swmsubprojetcs=swmInstall1SubList;
					stateSWM.totalProjectCost=$('.swm2GrandTotal').val();
					stateSWM.centralAssistanceSought=$('.swm2GrandCentralAssisTotal').val();
					stateSWM.stateContribution=$('.swm2GrandStateContriTotal').val();
					stateSWM.others=$('.swm2GrandOthersCostTotal').val();
					stateSWM.detailedActionPlanRefNo= $('.swm2dapRefNo').val();
					stateSWM.ucCertificateRefNO= $('.swm2ucRefNo').val();
					//proposalMasterData.shpcApprovalRefNO= $('.shpcRefNo').val();
					//proposalMasterData.status="validate";
					stateSWM.financialYear=$('.financialYear').val();
					if(editProposal !=null){
						$.each(editProposal.stateSWM,function(key,val){
							if(val.expenseHead == "SWM Installment2" ){
								stateSWM.Id= val.Id
								stateSWM.detailedActionPlanName = val.detailedActionPlanName;
								stateSWM.detailedActionPlanPath=val.detailedActionPlanPath;
								stateSWM.ucCertificateName=val.ucCertificateName;
								stateSWM.ucCertificatePath=val.ucCertificatePath;
								stateSWM.progressPhotoName=val.progressPhotoName;
								stateSWM.progressPhotoPath=val.progressPhotoPath;
								
							}
						});
					}
					
					stateSWMList.push(stateSWM);
					if(swm2dapFile == undefined || swm2ucFile == undefined || swm2ppFile == undefined){
						proposeMaster.status="Created";
					}else{
						proposeMaster.status="Saved";
					}
				}
				proposeMaster.stateSWM = stateSWMList;
				var iecdapFile=$("#iecDetailedUpload")[0].files[0];
				var iecucFile=$("#iecucUpload")[0].files[0];
				var iecppFile=$("#iecprogressUpload")[0].files[0];
				
				if(($('.iectotalProjectCost').val().length >= 1 ) && ($('.iecCentralAssiatance').val().length >= 1 )){
					var stateIEC= new Object();
					var stateCodeData= new Object();
					stateCodeData.stateCode=stateCode;
					stateIEC.StateCode=stateCodeData;
					stateIEC.expenseHead="IEC";
					//stateIEC.proposalName = $('.proposalName').val();
					/*if($('.iecptpAmount').val() > 0){
						stateIEC.physicalProposalTarget=$('.iecptpAmount').val();
					}else{
						stateIEC.physicalProposalTarget=0;
					}
					*/
					stateIEC.totalProjectCost=$('.iectotalProjectCost').val();
					stateIEC.centralAssistanceSought=$('.iecCentralAssiatance').val();
					stateIEC.stateContribution=$('.iecStateContribution').val();
					stateIEC.others=$('.iecOthers').val();
					stateIEC.description=$('.iecDescription').val();
					stateIEC.detailedActionPlanRefNo= $('.iecdapRefNo').val();
					stateIEC.ucCertificateRefNO= $('.iecucRefNo').val();
					//proposalMasterData.shpcApprovalRefNO= $('.shpcRefNo').val();
					//proposalMasterData.status="validate";
					stateIEC.financialYear=$('.financialYear').val();
					if(editProposal !=null){
						//$.each(editProposal.proposalHeadMaster,function(key,val){
							if(editProposal.stateIEC != undefined ){
								stateIEC.Id= editProposal.stateIEC.Id
								stateIEC.detailedActionPlanName = editProposal.stateIEC.detailedActionPlanName;
								stateIEC.detailedActionPlanPath=editProposal.stateIEC.detailedActionPlanPath;
								stateIEC.ucCertificateName=editProposal.stateIEC.ucCertificateName;
								stateIEC.ucCertificatePath=editProposal.stateIEC.ucCertificatePath;
								stateIEC.progressPhotoName=editProposal.stateIEC.progressPhotoName;
								stateIEC.progressPhotoPath=editProposal.stateIEC.progressPhotoPath;
								
							}
						//});
					}
					
					//proposalMasterList.push(proposalMasterData);
					if(iecdapFile == undefined || iecucFile == undefined || iecppFile == undefined){
						proposeMaster.status="Created";
					}else{
						proposeMaster.status="Saved";
					}
					proposeMaster.stateIEC=stateIEC;
				}
				
				var cbAoedapFile=$("#cbAoeDetailedUpload")[0].files[0];
				var cbAoeucFile=$("#cbAoeucUpload")[0].files[0];
				var cbAoeppFile=$("#cbAoeprogressUpload")[0].files[0];
				
				if( ($('.cbAoetotalProjectCost').val().length >= 1 ) && ($('.cbAoeCentralAssiatance').val().length >= 1 )){
					var cbAoe= new Object();
					var stateCodeData= new Object();
					stateCodeData.stateCode=stateCode;
					cbAoe.StateCode=stateCodeData;
					cbAoe.expenseHead="CB&AOE";
					//cbAoe.proposalName = $('.proposalName').val();
					/*if($('.cbAoeptpAmount').val() > 0){
						cbAoe.physicalProposalTarget=$('.cbAoeptpAmount').val();
					}else{
						cbAoe.physicalProposalTarget=0;
					}*/
					//proposalMasterData.physicalProposalTarget=$('.cbAoeptpAmount').val();
					cbAoe.totalProjectCost=$('.cbAoetotalProjectCost').val();
					cbAoe.centralAssistanceSought=$('.cbAoeCentralAssiatance').val();
					cbAoe.others=$('.cbAoeOthers').val();
					cbAoe.stateContribution=$('.cbAoeStateContribution').val();
					cbAoe.description=$('.cbAoeDescription').val();
					cbAoe.detailedActionPlanRefNo= $('.cbAoedapRefNo').val();
					cbAoe.ucCertificateRefNO= $('.cbAoeucRefNo').val();
					//proposalMasterData.shpcApprovalRefNO= $('.shpcRefNo').val();
					//proposalMasterData.status="validate";
					cbAoe.financialYear=$('.financialYear').val();
					if(editProposal !=null){
					//	$.each(editProposal.proposalHeadMaster,function(key,val){
							if(editProposal.stateCBAOE != undefined ){
								cbAoe.Id= editProposal.stateCBAOE.Id
								cbAoe.detailedActionPlanName = editProposal.stateCBAOE.detailedActionPlanName;
								cbAoe.detailedActionPlanPath=editProposal.stateCBAOE.detailedActionPlanPath;
								cbAoe.ucCertificateName=editProposal.stateCBAOE.ucCertificateName;
								cbAoe.ucCertificatePath=editProposal.stateCBAOE.ucCertificatePath;
								cbAoe.progressPhotoName=editProposal.stateCBAOE.progressPhotoName;
								cbAoe.progressPhotoPath=editProposal.stateCBAOE.progressPhotoPath;
								
							}
						//});
					}
					//proposalMasterList.push(proposalMasterData);
					if(cbAoedapFile == undefined || cbAoeucFile == undefined || cbAoeppFile == undefined){
						proposeMaster.status="Created";
					}else{
						proposeMaster.status="Saved";
					}
					proposeMaster.stateCBAOE=cbAoe;
				}
				
				
				var stateCodeData= new Object();
				stateCodeData.stateCode=stateCode;
				proposeMaster.StateCode=stateCodeData;
				proposeMaster.proposalName=$('.proposalName').val();
				proposeMaster.financialYear=$('.financialYear').val();
				//proposeMaster.totalAmount="34";
			//	proposeMaster.stateIHHL=proposalMasterList;
				
				var formData = new FormData();
				//proposeMaster.createdBy=$('.financialYear').val();
				
				
				formData.append('iHHL1dapFile',iHHL1dapFile );
				formData.append('iHHL1ucFile',iHHL1ucFile );
				formData.append('iHHL1ppFile',iHHL1ppFile );
				
				formData.append('iHHL2dapFile',iHHL2dapFile );
				formData.append('iHHL2ucFile',iHHL2ucFile );
				formData.append('iHHL2ppFile',iHHL2ppFile );
				
				
				formData.append('ctptdapFile',ctptdapFile );
				formData.append('ctptucFile',ctptucFile );
				formData.append('ctptppFile',ctptppFile );
				
				
				
				formData.append('swmdapFile',swmdapFile );
				formData.append('swmucFile',swmucFile );
				formData.append('swmppFile',swmppFile );
				
				
				formData.append('iecdapFile',iecdapFile );
				formData.append('iecucFile',iecucFile );
				formData.append('iecppFile',iecppFile );
				
				
				
				formData.append('cbAoedapFile',cbAoedapFile );
				formData.append('cbAoeucFile',cbAoeucFile );
				formData.append('cbAoeppFile',cbAoeppFile );
				
				
//				if($('#shpcApproved').prop('checked')){
//					var shpcFile=$("#shpcUpload")[0].files[0];
//					formData.append('shpcDocument',shpcFile );
//					proposalMasterData.status="SHPC-Approved";
//				}
//				if(proposalMasterData.heads == "IHHL Installment2"){
//					var fpFile=$("#financialUpload")[0].files[0];
//					formData.append('financialPlan',dapFile );
//				}
				
				formData.append('proposalMaster',JSON.stringify(proposeMaster));
				
				console.log(proposeMaster);
				$.ajax({
					url:"/SBMFundRequisition/fund/create/saveProposalByState",
					type:"POST",
					//headers: headerData,
					data : formData,
					enctype:"multipart/form-data",
					dataType : 'json',
					headers: headerData,
				    processData: false,  // tell jQuery not to process the data
				    contentType: false,
					success: function(data) {
						console.log(data);
						var dataStatus=false;
						submitProposal= new Object();
						submitProposal= data;
						editProposal= null;
						//$('#myModal').modal('toggle');
						var subTotal;
						if(data.stateIHHL != null || data.stateIHHL != undefined){
							$.each(data.stateIHHL,function(key,val){
								
								console.log(key+" ****  "+val);
								if(val.expenseHead == "IHHL Installment1"){
									$('.ihhl1targetAmount').html(119);
									$('.ihhl1fundAllocation').html(322);
									$('.ihhl1proposalTarget').html(val.physicalProposalTarget);
									$('.ihhl1requestAMount').html(val.requestFundAmount);
									if(val.detailedActionPlanName != "" && val.progressPhotoName != "" && val.ucCertificateName != ""){
										dataStatus = true;
									}else {
										dataStatus = false;
									}
									subTotal=subTotal+val.requestFundAmount;
								}else if(val.expenseHead == "IHHL Installment2"){
									$('.ihhl2targetAmount').html(23);
									$('.ihhl2fundAllocation').html(3);
									$('.ihhl2proposalTarget').html(val.physicalProposalTarget);
									$('.ihhl2requestAMount').html(val.requestFundAmount);
									subTotal=subTotal+val.requestFundAmount;
									if(val.detailedActionPlanName != "" && val.progressPhotoName != "" && val.ucCertificateName != "" && val.financialProgressIhhlContructedName != ""){
										dataStatus = true;
									}else{
										dataStatus = false;
									}
								}
							});
								
						}
						
						
						 if(data.stateCTPT != null || data.stateCTPT != undefined){
							$('.ctpttargetAmount').html(34);
							$('.ctptfundAllocation').html(234);
							$('.ctptproposalTarget').html(data.stateCTPT.physicalProposalTarget);
							$('.ctptrequestAMount').html(data.stateCTPT.centralAssistanceSought);
							subTotal=subTotal+data.stateCTPT.centralAssistanceSought;
							if(data.stateCTPT.detailedActionPlanName != "" && data.stateCTPT.progressPhotoName != "" && data.stateCTPT.ucCertificateName != ""){
								dataStatus = true;
							}else{
								dataStatus = false;
							}
						}
						 
						if(data.stateSWM != null ||data.stateSWM != undefined ){
							$.each(data.stateSWM,function(key,val){
								if(val.expenseHead == "SWM Installment1"){
									//$('.swmtargetAmount').html(423);
									//$('.swmfundAllocation').html(22);
									$('.swmproposalTarget').html();
									$('.swmrequestAMount').html(val.centralAssistanceSought);
									subTotal=subTotal+val.requestFundAmount;
									if(val.detailedActionPlanName != "" && val.progressPhotoName != "" && val.ucCertificateName != ""){
										dataStatus = true;
									}else{
										dataStatus = false;
									}
								}
							});
							
						}
						if(data.stateIEC != null ||data.stateIEC != undefined ){
							$('.iectargetAmount').html(343);
							$('.iecfundAllocation').html(22);
							//$('.iecproposalTarget').html(data.stateIEC.physicalProposalTarget);
							$('.iecrequestAMount').html(data.stateIEC.centralAssistanceSought);
							subTotal=subTotal+data.stateCBAOE.centralAssistanceSought;
							if(data.stateIEC.detailedActionPlanName != "" && data.stateIEC.progressPhotoName != "" && data.stateIEC.ucCertificateName != ""){
								dataStatus = true;
							}else{
								dataStatus = false;
							}
						}
						if(data.stateCBAOE != null ||data.stateCBAOE != undefined){
							$('.cbAoetargetAmount').html(223);
							$('.cbAoefundAllocation').html(34);
							//$('.cbAoeproposalTarget').html(data.stateCBAOE.physicalProposalTarget);
							$('.cbAoerequestAMount').html(data.stateCBAOE.centralAssistanceSought);
							subTotal=subTotal+data.stateCBAOE.centralAssistanceSought;
							if(data.stateCBAOE.detailedActionPlanName != "" && data.stateCBAOE.progressPhotoName != "" && data.stateCBAOE.ucCertificateName != ""){
								dataStatus = true;
							}else{
								dataStatus = false;
							}
						}
						$('.grandTotal').html(data.totalAmount);
						$('.total').html(subTotal);
						SBMFundRequisitionHandler.getProposalByState();
						if(dataStatus == true){
							$('#SubmitProposal').modal();
						}
						
						
						//getProposalsByStateTable(data);
					}
				});
				
			});
			$('.submitProposal').on('click',function(){
				if($('#shpcApproved').prop('checked')){
					var formData = new FormData();
					var proposalMaster = new Object();
					proposalMaster= submitProposal;
					var shpcFile=$("#shpcUpload")[0].files[0];
					formData.append('shpcDocument',shpcFile );
					proposalMaster.status="SHPC-Approved";
					
					formData.append('proposalMaster',JSON.stringify(proposalMaster));
					$.ajax({
						url:"/SBMFundRequisition/fund/create/submitProposalByState",
						type:"POST",
						//headers: headerData,
						data : formData,
						enctype:"multipart/form-data",
						dataType : 'json',
						headers: headerData,
					    processData: false,  // tell jQuery not to process the data
					    contentType: false,
						success: function(data) {
							getProposalsByStateTable(data);
							$('#SubmitProposal').modal('hide');
						}
					});
				}
			});
			$(document).on('click','.proposalIdView',function(){
				 $("input[type='text'").attr("disabled", "disabled"); 
				 $('.saveProposal').hide();
				 $('.withDrawProposal').hide();
				var proposalData= new Object();
				proposalData.proposalId= $(this).closest('tr').attr('Id');
				$.ajax({
					url:"/SBMFundRequisition/fund/read/getProposalById",
					type:"POST",
					dataType:'json',
					headers: headerData,
					data:JSON.stringify(proposalData),
					contentType:"application/json",
					success:function(data){
						console.log(data)
						editProposal= new Object();
						editProposal= data;
						if(data.status == "Saved" || data.status == "Created" ){
							$('#shpcApproved').prop('checked', false);
						}else{
							$('#shpcApproved').prop('checked', true);
						}
						if(data.status == "Created"){
							$('.createLi a').addClass('active');
							$('.validateLi a').removeClass('active');
							$('.shpcAppLi a').removeClass('active');
							$('.centerAppLi a').removeClass('active');
							$('.centerAppLi').show();
							$('.centerRejLi').hide();
							$('.approvedProposalDiv').hide();
						}else if(data.status == "Saved" || data.status == "Withdraw"){
							$('.createLi a').removeClass('active');
							$('.validateLi a').addClass('active');
							$('.shpcAppLi a').removeClass('active');
							$('.centerAppLi a').removeClass('active');
							$('.centerAppLi').show();
							$('.centerRejLi').hide();
							$('.approvedProposalDiv').hide();
						}else if(data.status == "SHPC-Approved"){
							$('.createLi a').removeClass('active');
							$('.validateLi a').removeClass('active');
							$('.shpcAppLi a').addClass('active');
							$('.centerAppLi a').removeClass('active');
							$('.centerAppLi').show();
							$('.centerRejLi').hide();
							$('.approvedProposalDiv').hide();
						}else if(data.status == "Center-Approved"){
							$('.createLi a').removeClass('active');
							$('.validateLi a').removeClass('active');
							$('.shpcAppLi a').removeClass('active');
							$('.centerAppLi a').addClass('active');
							$('.centerAppLi').show();
							$('.centerRejLi').hide();
							$('.approvedProposalDiv').hide();
						}else if(data.status == "Returned-by-Centre"){
							$('.createLi a').removeClass('active');
							$('.validateLi a').removeClass('active');
							$('.shpcAppLi a').removeClass('active');
							$('.centerRejLi a').addClass('active');
							$('.centerAppLi').hide();
							$('.centerRejLi').show();
							$('.approvedProposalDiv').show();
							
						}
						$.each(data.stateIHHL,function(key,val){
							console.log(key+" ****  "+val);
							if(val.expenseHead == "IHHL Installment1"){
								//$('.sanihhl1ProposalHead').val(val.heads);
								$('.iHHL1ptpAmount').val(val.physicalProposalTarget);
								$('.iHHL1tpAoumnt').val(val.totalProposalAmount);
								$('.iHHL1requestAmount').val(val.requestFundAmount);
								//$('.sanihhl1financialYear').val(data.financialYear);
								$('.iHHL1dapFileText').val(val.detailedActionPlanName)
								$('.iHHL1dapRefNo').val(val.detailedActionPlanRefNo)
								$('.iHHLucFileText').val(val.ucCertificateName)
								$('.iHHL1ucRefNo').val(val.ucCertificateRefNO)
								$('.iHHL1ProgressFileText').val(val.progressPhotoName)
							//	$('.iHHL1dapFileText').val(val.detailedActionPlanName)
								
								//table view
								/*$('.ihhl1targetAmount').html(119);
								$('.ihhl1fundAllocation').html(322);
								$('.ihhl1proposalTarget').html(val.physicalProposalTarget);
								$('.ihhl1requestAMount').html(val.requestFundAmount);*/
								
							}else if(val.expenseHead == "IHHL Installment2"){
								/*$('.ihhl2targetAmount').html(23);
								$('.ihhl2fundAllocation').html(3);
								$('.ihhl2proposalTarget').html(val.physicalProposalTarget);
								$('.ihhl2requestAMount').html(val.requestFundAmount);*/
								
								$('.iHHL2ptpAmount').val(val.physicalProposalTarget);
								$('.iHHL2tpAoumnt').val(val.totalProposalAmount);
								$('.iHHL2requestAmount').val(val.requestFundAmount);
								$('.iHHL2Remarks').val(data.remarks);
								$('.iHHL2dapFileText').val(val.detailedActionPlanName);
								$('.iHHL2dapRefNo').val(val.detailedActionPlanRefNo);
								$('.iHHL2ucFileText').val(val.ucCertificateName);
								$('.iHHL2ucRefNo').val(val.ucCertificateRefNO);
								$('.iHHL2ProgressFileText').val(val.progressPhotoName);
								$('.financialFileText').val(val.detailedActionPlanName);
								
							}
							
						});
						 if(data.stateCTPT != "" && data.stateCTPT != undefined){
								/*$('.ctpttargetAmount').html(34);
								$('.ctptfundAllocation').html(234);
								$('.ctptproposalTarget').html(val.physicalProposalTarget);
								$('.ctptrequestAMount').html(val.requestFundAmount);*/
								
								$('.cTPTptpAmount').val(data.stateCTPT.physicalProposalTarget);
								$('.cTPTtotalProjectCost').val(data.stateCTPT.totalProjectCost);
								$('.ctptCentralAssiatance').val(data.stateCTPT.centralAssistanceSought);
								$('.ctptStateContribution').val(data.stateCTPT.stateContribution);
								$('.ctptOthers').val(data.stateCTPT.others);
								$('.cTPTDescription').val(data.stateCTPT.description);
								$('.cTPTdapFileText').val(data.stateCTPT.detailedActionPlanName)
								$('.cTPTdapRefNo').val(data.stateCTPT.detailedActionPlanRefNo)
								$('.cTPTucFileText').val(data.stateCTPT.ucCertificateName)
								$('.cTPTucRefNo').val(data.stateCTPT.ucCertificateRefNO)
								$('.cTPTProgressFileText').val(data.stateCTPT.progressPhotoName)
								
								
							}
						 $.each(data.stateSWM , function(key,val){
							 
							 if(val.expenseHead == "SWM Installment1"){
								 
									/*$('.swmtargetAmount').html(423);
									$('.swmfundAllocation').html(22);
									$('.swmproposalTarget').html(val.physicalProposalTarget);
									$('.swmrequestAMount').html(val.requestFundAmount);*/
									
									$('.swmGrandTotal').val(val.totalProjectCost);
									$('.swmGrandCentralAssisTotal').val(val.centralAssistanceSought);
									$('.swmGrandStateContriTotal').val(val.stateContribution);
									$('.swmGrandOthersCostTotal').val(val.others);
								//	$('.swmRemarks').val(val.description);
									$('.swmdapFileText').val(val.detailedActionPlanName)
									$('.swmdapRefNo').val(val.detailedActionPlanRefNo)
									$('.swmucFileText').val(val.ucCertificateName)
									$('.swmucRefNo').val(val.ucCertificateRefNO)
									$('.swmProgressFileText').val(val.progressPhotoName)
									$.each(val.swmsubprojetcs ,function(key,val){
										console.log(key+"*********"+val);
										if(key == 0){
											$('.swmtotalProjectCost').val(val.totalProjectCost);
											$('.swmCentralAssiatance').val(val.centralAssistanceSought);
											$('.swmStateContribution').val(val.stateContribution);
											$('.swmOthers').val(val.others);
											$('.swmdescription').val(val.description);
											$('.swmSubProjectName').val(val.swmSubProjectName)
										}else{
											$('.addSubProject').closest('.row').prepend("<div class=\"subProDetailsdiv\">	<div class=\"row\">	<div class=\"col-sm-4\">" +
													"<div class=\"form-group\">	<label for=\"\">Sub Project Name  (cr)</label> " +
													"<input	type=\"text\" name=\"\" class=\"form-control swmSubProjectName\" value="+val.swmSubProjectName+"></div>	</div>" +
													"<div class=\"col-sm-4\">	<div class=\"form-group\"><label for=\"\">Project Description</label>" +
															"<textarea class=\"form-control swmdescription\" rows=\"4\" >"+val.description+"</textarea>" +
															"</div>	</div><div class=\"col-sm-4\"><div class=\"form-group\">" +
															"<label for=\"\">Total Sub Project Cost (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swmtotalProjectCost\"  value="+val.totalProjectCost+"></div></div>" +
															"</div><div class=\"row\"><div class=\"col-sm-4\"><div class=\"form-group\">" +
															"<label for=\"\">Central Assistance (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swmCentralAssiatance\"  value="+val.centralAssistanceSought+"></div>	</div>" +
															"<div class=\"col-sm-4\"><div class=\"form-group\">	<label for=\"\">State Contribution (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swmStateContribution\"  value="+val.stateContribution+"></div>	</div>" +
															"<div class=\"col-sm-4\"><div class=\"form-group\"><label for=\"\">Others (cr)</label>" +
															"<input	type=\"text\" name=\"\" class=\"form-control swmOthers\"  value="+val.others+"></div></div></div></div>");
										
									
										}
									});
									
								} else if(val.expenseHead == "SWM Installment2"){
								 
									/*$('.swmtargetAmount').html(423);
									$('.swmfundAllocation').html(22);
									$('.swmproposalTarget').html(val.physicalProposalTarget);
									$('.swmrequestAMount').html(val.requestFundAmount);*/
									
									$('.swm2GrandTotal').val(val.totalProjectCost);
									$('.swm2GrandCentralAssisTotal').val(val.centralAssistanceSought);
									$('.swm2GrandStateContriTotal').val(val.stateContribution);
									$('.swm2GrandOthersCostTotal').val(val.others);
								//	$('.swmRemarks').val(val.description);
									$('.swm2dapFileText').val(val.detailedActionPlanName)
									$('.swm2dapRefNo').val(val.detailedActionPlanRefNo)
									$('.swm2ucFileText').val(val.ucCertificateName)
									$('.swm2ucRefNo').val(val.ucCertificateRefNO)
									$('.swm2ProgressFileText').val(val.progressPhotoName)
									$.each(val.swmsubprojetcs ,function(key,val){
										console.log(key+"*********"+val);
										if(key == 0){
											$('.swm2totalProjectCost').val(val.totalProjectCost);
											$('.swm2CentralAssiatance').val(val.centralAssistanceSought);
											$('.swm2StateContribution').val(val.stateContribution);
											$('.swm2Others').val(val.others);
											$('.swm2description').val(val.description);
											$('.swm2SubProjectName').val(val.swmSubProjectName)
										}else{
											$('.swm2addSubProject').closest('.row').prepend("<div class=\"swm2subProDetailsdiv\">	<div class=\"row\">	<div class=\"col-sm-4\">" +
													"<div class=\"form-group\">	<label for=\"\">Sub Project Name  (cr)</label> " +
													"<input	type=\"text\" name=\"\" class=\"form-control swm2SubProjectName\" value="+val.swmSubProjectName+"></div>	</div>" +
													"<div class=\"col-sm-4\">	<div class=\"form-group\"><label for=\"\">Project Description</label>" +
															"<textarea class=\"form-control swm2description\" rows=\"4\" >"+val.description+"</textarea>" +
															"</div>	</div><div class=\"col-sm-4\"><div class=\"form-group\">" +
															"<label for=\"\">Total Sub Project Cost (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swm2totalProjectCost\"  value="+val.totalProjectCost+"></div></div>" +
															"</div><div class=\"row\"><div class=\"col-sm-4\"><div class=\"form-group\">" +
															"<label for=\"\">Central Assistance (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swm2CentralAssiatance\"  value="+val.centralAssistanceSought+"></div>	</div>" +
															"<div class=\"col-sm-4\"><div class=\"form-group\">	<label for=\"\">State Contribution (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swm2StateContribution\"  value="+val.stateContribution+"></div>	</div>" +
															"<div class=\"col-sm-4\"><div class=\"form-group\"><label for=\"\">Others (cr)</label>" +
															"<input	type=\"text\" name=\"\" class=\"form-control swm2Others\"  value="+val.others+"></div></div></div></div>");
										
									
										}
									});
									
								}
						 });
						  if(data.stateIEC != "" && data.stateIEC != undefined){
								/*$('.iectargetAmount').html(343);
								$('.iecfundAllocation').html(22);
								$('.iecproposalTarget').html(val.physicalProposalTarget);
								$('.iecrequestAMount').html(val.requestFundAmount);*/
								
							  	//$('.cTPTptpAmount').val(val.physicalProposalTarget);
								$('.iectotalProjectCost').val(data.stateIEC.totalProjectCost);
								$('.iecCentralAssiatance').val(data.stateIEC.centralAssistanceSought);
								$('.iecStateContribution').val(data.stateIEC.stateContribution);
								$('.iecOthers').val(data.stateIEC.others);
								$('.iecDescription').val(data.stateIEC.description);
								$('.iecdapFileText').val(data.stateIEC.detailedActionPlanName);
								$('.iecdapRefNo').val(data.stateIEC.detailedActionPlanRefNo);
								$('.iecucFileText').val(data.stateIEC.ucCertificateName);
								$('.iecucRefNo').val(data.stateIEC.ucCertificateRefNO);
								$('.iecProgressFileText').val(data.stateIEC.progressPhotoName)
							}
						  if(data.stateCBAOE != "" && data.stateCBAOE != undefined){
								/*$('.cbAoetargetAmount').html(223);
								$('.cbAoefundAllocation').html(34);
								$('.cbAoeproposalTarget').html(val.physicalProposalTarget);
								$('.cbAoerequestAMount').html(val.requestFundAmount);*/
								
							    $('.cbAoetotalProjectCost').val(data.stateCBAOE.totalProjectCost);
								$('.cbAoeCentralAssiatance').val(data.stateCBAOE.centralAssistanceSought);
								$('.cbAoeStateContribution').val(data.stateCBAOE.stateContribution);
								$('.cbAoeOthers').val(data.stateCBAOE.others);
								$('.cbAoeDescription').val(data.stateCBAOE.description);
								$('.cbAoedapFileText').val(data.stateCBAOE.detailedActionPlanName)
								$('.cbAoedapRefNo').val(data.stateCBAOE.detailedActionPlanRefNo)
								$('.cbAoeucFileText').val(data.stateCBAOE.ucCertificateName)
								$('.cbAoeucRefNo').val(data.stateCBAOE.ucCertificateRefNO)
								$('.cbAoeProgressFileText').val(data.stateCBAOE.progressPhotoName)
								
							}
						$('.proposalName').val(data.proposalName);
						$('.proposalStatus').val(data.status);
						/*$('.ptpAmount').val(data.physicalProposalTarget);
						$('.tpAoumnt').val(data.totalProposalAmount);
						$('.requestAmount').val(data.requestFundAmount);
						$('.remarks').val(data.remarks);
						$('.dapRefNo').val(data.detailedActionPlanRefNo);
						$('.ucRefNo').val(data.ucCertificateRefNO);*/
						//$('.dapRefNo').val(data.proposalName);
						
						
						/*$('.dapFileText').val(data.detailedActionPlanName);
						$('.ucFileText').val(data.ucCertificateName);
						$('.progressFileText').val(data.progressPhotoName);
						$('.shpcFileText').val(data.shpcApprovalName);
						$('.shpcRefNo').val(data.shpcApprovalRefNO);*/
					}
				});
			});
		},
		editProposalByState:function(){
			$(document).on('click','.editProposal',function(){
				$("input[type='text'").removeAttr('disabled');
				 $('.saveProposal').show();
				 $('.withDrawProposal').hide();
				var stateDetails= new Object();
				stateDetails.stateCode=stateCode;
				stateDetails.expenseHead='IHHL';
				var proposalData= new Object();
				proposalData.proposalId= $(this).closest('tr').attr('Id');
				console.log($(this).closest('tr').attr('Id'));
				$.ajax({
					url:"/SBMFundRequisition/fund/read/getProposalById",
					type:"POST",
					dataType:'json',
					headers: headerData,
					data: JSON.stringify(proposalData),
					contentType:"application/json",
					success:function(data){
						console.log(data)
						editProposal= new Object();
						editProposal= data;
						if(data.status == "Saved" || data.status == "Created" ){
							$('#shpcApproved').prop('checked', false);
						}else{
							$('#shpcApproved').prop('checked', true);
						}
						if(data.status == "Created"){
							$('.createLi a').addClass('active');
							$('.validateLi a').removeClass('active');
							$('.shpcAppLi a').removeClass('active');
							$('.centerAppLi a').removeClass('active');
							$('.centerAppLi').show();
							$('.centerRejLi').hide();
							$('.approvedProposalDiv').hide();
						}else if(data.status == "Saved" || data.status == "Withdraw"){
							$('.createLi a').removeClass('active');
							$('.validateLi a').addClass('active');
							$('.shpcAppLi a').removeClass('active');
							$('.centerAppLi a').removeClass('active');
							$('.centerAppLi').show();
							$('.centerRejLi').hide();
							$('.approvedProposalDiv').hide();
						}else if(data.status == "SHPC-Approved"){
							$('.createLi a').removeClass('active');
							$('.validateLi a').removeClass('active');
							$('.shpcAppLi a').addClass('active');
							$('.centerAppLi a').removeClass('active');
							$('.centerAppLi').show();
							$('.centerRejLi').hide();
							$('.approvedProposalDiv').hide();
						}else if(data.status == "Center-Approved"){
							$('.createLi a').removeClass('active');
							$('.validateLi a').removeClass('active');
							$('.shpcAppLi a').removeClass('active');
							$('.centerAppLi a').addClass('active');
							$('.centerAppLi').show();
							$('.centerRejLi').hide();
							$('.approvedProposalDiv').hide();
						}else if(data.status == "Returned-by-Centre"){
							$('.createLi a').removeClass('active');
							$('.validateLi a').removeClass('active');
							$('.shpcAppLi a').removeClass('active');
							$('.centerRejLi a').addClass('active');
							$('.centerAppLi').hide();
							$('.centerRejLi').show();
							$('.approvedProposalDiv').show();
							
						}
						$.each(data.stateIHHL,function(key,val){
							console.log(key+" ****  "+val);
							if(val.expenseHead == "IHHL Installment1"){
								//$('.sanihhl1ProposalHead').val(val.heads);
								$('.iHHL1ptpAmount').val(val.physicalProposalTarget);
								$('.iHHL1tpAoumnt').val(val.totalProposalAmount);
								$('.iHHL1requestAmount').val(val.requestFundAmount);
								//$('.sanihhl1financialYear').val(data.financialYear);
								$('.iHHL1dapFileText').val(val.detailedActionPlanName)
								$('.iHHL1dapRefNo').val(val.detailedActionPlanRefNo)
								$('.iHHLucFileText').val(val.ucCertificateName)
								$('.iHHL1ucRefNo').val(val.ucCertificateRefNO)
								$('.iHHL1ProgressFileText').val(val.progressPhotoName)
							//	$('.iHHL1dapFileText').val(val.detailedActionPlanName)
								
								//table view
								/*$('.ihhl1targetAmount').html(119);
								$('.ihhl1fundAllocation').html(322);
								$('.ihhl1proposalTarget').html(val.physicalProposalTarget);
								$('.ihhl1requestAMount').html(val.requestFundAmount);*/
								
							}else if(val.expenseHead == "IHHL Installment2"){
								/*$('.ihhl2targetAmount').html(23);
								$('.ihhl2fundAllocation').html(3);
								$('.ihhl2proposalTarget').html(val.physicalProposalTarget);
								$('.ihhl2requestAMount').html(val.requestFundAmount);*/
								
								$('.iHHL2ptpAmount').val(val.physicalProposalTarget);
								$('.iHHL2tpAoumnt').val(val.totalProposalAmount);
								$('.iHHL2requestAmount').val(val.requestFundAmount);
								$('.iHHL2Remarks').val(data.remarks);
								$('.iHHL2dapFileText').val(val.detailedActionPlanName);
								$('.iHHL2dapRefNo').val(val.detailedActionPlanRefNo);
								$('.iHHL2ucFileText').val(val.ucCertificateName);
								$('.iHHL2ucRefNo').val(val.ucCertificateRefNO);
								$('.iHHL2ProgressFileText').val(val.progressPhotoName);
								$('.financialFileText').val(val.detailedActionPlanName);
								
							}
							
						});
						 if(data.stateCTPT != "" && data.stateCTPT != undefined){
								/*$('.ctpttargetAmount').html(34);
								$('.ctptfundAllocation').html(234);
								$('.ctptproposalTarget').html(val.physicalProposalTarget);
								$('.ctptrequestAMount').html(val.requestFundAmount);*/
								
								$('.cTPTptpAmount').val(data.stateCTPT.physicalProposalTarget);
								$('.cTPTtotalProjectCost').val(data.stateCTPT.totalProjectCost);
								$('.ctptCentralAssiatance').val(data.stateCTPT.centralAssistanceSought);
								$('.ctptStateContribution').val(data.stateCTPT.stateContribution);
								$('.ctptOthers').val(data.stateCTPT.others);
								$('.cTPTDescription').val(data.stateCTPT.description);
								$('.cTPTdapFileText').val(data.stateCTPT.detailedActionPlanName)
								$('.cTPTdapRefNo').val(data.stateCTPT.detailedActionPlanRefNo)
								$('.cTPTucFileText').val(data.stateCTPT.ucCertificateName)
								$('.cTPTucRefNo').val(data.stateCTPT.ucCertificateRefNO)
								$('.cTPTProgressFileText').val(data.stateCTPT.progressPhotoName)
								
								
							}
						 $.each(data.stateSWM , function(key,val){
							 
							 if(val.expenseHead == "SWM Installment1"){
								 
									/*$('.swmtargetAmount').html(423);
									$('.swmfundAllocation').html(22);
									$('.swmproposalTarget').html(val.physicalProposalTarget);
									$('.swmrequestAMount').html(val.requestFundAmount);*/
									
									$('.swmGrandTotal').val(val.totalProjectCost);
									$('.swmGrandCentralAssisTotal').val(val.centralAssistanceSought);
									$('.swmGrandStateContriTotal').val(val.stateContribution);
									$('.swmGrandOthersCostTotal').val(val.others);
								//	$('.swmRemarks').val(val.description);
									$('.swmdapFileText').val(val.detailedActionPlanName)
									$('.swmdapRefNo').val(val.detailedActionPlanRefNo)
									$('.swmucFileText').val(val.ucCertificateName)
									$('.swmucRefNo').val(val.ucCertificateRefNO)
									$('.swmProgressFileText').val(val.progressPhotoName)
									$.each(val.swmsubprojetcs ,function(key,val){
										console.log(key+"*********"+val);
										if(key == 0){
											$('.swmtotalProjectCost').val(val.totalProjectCost);
											$('.swmCentralAssiatance').val(val.centralAssistanceSought);
											$('.swmStateContribution').val(val.stateContribution);
											$('.swmOthers').val(val.others);
											$('.swmdescription').val(val.description);
											$('.swmSubProjectName').val(val.swmSubProjectName)
										}else{
											$('.addSubProject').closest('.row').prepend("<div class=\"subProDetailsdiv\">	<div class=\"row\">	<div class=\"col-sm-4\">" +
													"<div class=\"form-group\">	<label for=\"\">Sub Project Name  (cr)</label> " +
													"<input	type=\"text\" name=\"\" class=\"form-control swmSubProjectName\" value="+val.swmSubProjectName+"></div>	</div>" +
													"<div class=\"col-sm-4\">	<div class=\"form-group\"><label for=\"\">Project Description</label>" +
															"<textarea class=\"form-control swmdescription\" rows=\"4\" >"+val.description+"</textarea>" +
															"</div>	</div><div class=\"col-sm-4\"><div class=\"form-group\">" +
															"<label for=\"\">Total Sub Project Cost (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swmtotalProjectCost\"  value="+val.totalProjectCost+"></div></div>" +
															"</div><div class=\"row\"><div class=\"col-sm-4\"><div class=\"form-group\">" +
															"<label for=\"\">Central Assistance (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swmCentralAssiatance\"  value="+val.centralAssistanceSought+"></div>	</div>" +
															"<div class=\"col-sm-4\"><div class=\"form-group\">	<label for=\"\">State Contribution (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swmStateContribution\"  value="+val.stateContribution+"></div>	</div>" +
															"<div class=\"col-sm-4\"><div class=\"form-group\"><label for=\"\">Others (cr)</label>" +
															"<input	type=\"text\" name=\"\" class=\"form-control swmOthers\"  value="+val.others+"></div></div></div></div>");
										
									
										}
									});
									
								} else if(val.expenseHead == "SWM Installment2"){
								 
									/*$('.swmtargetAmount').html(423);
									$('.swmfundAllocation').html(22);
									$('.swmproposalTarget').html(val.physicalProposalTarget);
									$('.swmrequestAMount').html(val.requestFundAmount);*/
									
									$('.swm2GrandTotal').val(val.totalProjectCost);
									$('.swm2GrandCentralAssisTotal').val(val.centralAssistanceSought);
									$('.swm2GrandStateContriTotal').val(val.stateContribution);
									$('.swm2GrandOthersCostTotal').val(val.others);
								//	$('.swmRemarks').val(val.description);
									$('.swm2dapFileText').val(val.detailedActionPlanName)
									$('.swm2dapRefNo').val(val.detailedActionPlanRefNo)
									$('.swm2ucFileText').val(val.ucCertificateName)
									$('.swm2ucRefNo').val(val.ucCertificateRefNO)
									$('.swm2ProgressFileText').val(val.progressPhotoName)
									$.each(val.swmsubprojetcs ,function(key,val){
										console.log(key+"*********"+val);
										if(key == 0){
											$('.swm2totalProjectCost').val(val.totalProjectCost);
											$('.swm2CentralAssiatance').val(val.centralAssistanceSought);
											$('.swm2StateContribution').val(val.stateContribution);
											$('.swm2Others').val(val.others);
											$('.swm2description').val(val.description);
											$('.swm2SubProjectName').val(val.swmSubProjectName)
										}else{
											$('.swm2addSubProject').closest('.row').prepend("<div class=\"swm2subProDetailsdiv\">	<div class=\"row\">	<div class=\"col-sm-4\">" +
													"<div class=\"form-group\">	<label for=\"\">Sub Project Name  (cr)</label> " +
													"<input	type=\"text\" name=\"\" class=\"form-control swm2SubProjectName\" value="+val.swmSubProjectName+"></div>	</div>" +
													"<div class=\"col-sm-4\">	<div class=\"form-group\"><label for=\"\">Project Description</label>" +
															"<textarea class=\"form-control swm2description\" rows=\"4\" >"+val.description+"</textarea>" +
															"</div>	</div><div class=\"col-sm-4\"><div class=\"form-group\">" +
															"<label for=\"\">Total Sub Project Cost (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swm2totalProjectCost\"  value="+val.totalProjectCost+"></div></div>" +
															"</div><div class=\"row\"><div class=\"col-sm-4\"><div class=\"form-group\">" +
															"<label for=\"\">Central Assistance (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swm2CentralAssiatance\"  value="+val.centralAssistanceSought+"></div>	</div>" +
															"<div class=\"col-sm-4\"><div class=\"form-group\">	<label for=\"\">State Contribution (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swm2StateContribution\"  value="+val.stateContribution+"></div>	</div>" +
															"<div class=\"col-sm-4\"><div class=\"form-group\"><label for=\"\">Others (cr)</label>" +
															"<input	type=\"text\" name=\"\" class=\"form-control swm2Others\"  value="+val.others+"></div></div></div></div>");
										
									
										}
									});
									
								}
						 });
						  if(data.stateIEC != "" && data.stateIEC != undefined){
								/*$('.iectargetAmount').html(343);
								$('.iecfundAllocation').html(22);
								$('.iecproposalTarget').html(val.physicalProposalTarget);
								$('.iecrequestAMount').html(val.requestFundAmount);*/
								
							  	//$('.cTPTptpAmount').val(val.physicalProposalTarget);
								$('.iectotalProjectCost').val(data.stateIEC.totalProjectCost);
								$('.iecCentralAssiatance').val(data.stateIEC.centralAssistanceSought);
								$('.iecStateContribution').val(data.stateIEC.stateContribution);
								$('.iecOthers').val(data.stateIEC.others);
								$('.iecDescription').val(data.stateIEC.description);
								$('.iecdapFileText').val(data.stateIEC.detailedActionPlanName);
								$('.iecdapRefNo').val(data.stateIEC.detailedActionPlanRefNo);
								$('.iecucFileText').val(data.stateIEC.ucCertificateName);
								$('.iecucRefNo').val(data.stateIEC.ucCertificateRefNO);
								$('.iecProgressFileText').val(data.stateIEC.progressPhotoName)
							}
						  if(data.stateCBAOE != "" && data.stateCBAOE != undefined){
								/*$('.cbAoetargetAmount').html(223);
								$('.cbAoefundAllocation').html(34);
								$('.cbAoeproposalTarget').html(val.physicalProposalTarget);
								$('.cbAoerequestAMount').html(val.requestFundAmount);*/
								
							    $('.cbAoetotalProjectCost').val(data.stateCBAOE.totalProjectCost);
								$('.cbAoeCentralAssiatance').val(data.stateCBAOE.centralAssistanceSought);
								$('.cbAoeStateContribution').val(data.stateCBAOE.stateContribution);
								$('.cbAoeOthers').val(data.stateCBAOE.others);
								$('.cbAoeDescription').val(data.stateCBAOE.description);
								$('.cbAoedapFileText').val(data.stateCBAOE.detailedActionPlanName)
								$('.cbAoedapRefNo').val(data.stateCBAOE.detailedActionPlanRefNo)
								$('.cbAoeucFileText').val(data.stateCBAOE.ucCertificateName)
								$('.cbAoeucRefNo').val(data.stateCBAOE.ucCertificateRefNO)
								$('.cbAoeProgressFileText').val(data.stateCBAOE.progressPhotoName)
								
							}
						
						$('.proposalName').val(data.proposalName);
						$('.proposalStatus').val(data.status);
						/*$('.ptpAmount').val(data.physicalProposalTarget);
						$('.tpAoumnt').val(data.totalProposalAmount);
						$('.requestAmount').val(data.requestFundAmount);
						$('.remarks').val(data.remarks);
						$('.dapRefNo').val(data.detailedActionPlanRefNo);
						$('.ucRefNo').val(data.ucCertificateRefNO);*/
						//$('.dapRefNo').val(data.proposalName);
						
						
						/*$('.dapFileText').val(data.detailedActionPlanName);
						$('.ucFileText').val(data.ucCertificateName);
						$('.progressFileText').val(data.progressPhotoName);
						$('.shpcFileText').val(data.shpcApprovalName);
						$('.shpcRefNo').val(data.shpcApprovalRefNO);*/
					}
				});
				$.ajax({
					url:"/SBMFundRequisition/fund/read/getSanctionDetailsByState",
					type:"POST",
					dataType:'json',
					headers: headerData,
					data:JSON.stringify(stateDetails),
					contentType:"application/json",
					success:function(data){
						console.log(data)
					}
				});
				$.ajax({
					url:"/SBMFundRequisition/fund/read/getUtilisationByState",
					type:"POST",
					dataType:'json',
					headers: headerData,
					contentType:"application/json",
					data:JSON.stringify(stateDetails),
					success:function(data){
						$.each(data,function(key,val){
							console.log(key+"----"+val);
							$('.proposedUtilizedFunds').val(val.utilizationAmountTillDate)
						});
						
						console.log(data)
					}
				});
			});
			
			$(document).on('click','.viewProposal',function(){
				 $("input[type='text'").attr("disabled", "disabled"); 
				 $('.saveProposal').hide();
				 $('.withDrawProposal').show();
				 
				 var stateDetails= new Object();
					stateDetails.stateCode=stateCode;
					stateDetails.expenseHead='IHHL'
					console.log($(this).closest('tr').attr('Id'));
					var proposalData= new Object();
					proposalData.proposalId= $(this).closest('tr').attr('Id');
					$.ajax({
						url:"/SBMFundRequisition/fund/read/getProposalById",
						type:"POST",
						dataType:'json',
						headers: headerData,
						data:JSON.stringify(proposalData),
						contentType:"application/json",
						success:function(data){
							console.log(data)
							editProposal= new Object();
							editProposal= data;
							if(data.status == "Saved" || data.status == "Created" ){
								$('#shpcApproved').prop('checked', false);
							}else{
								$('#shpcApproved').prop('checked', true);
							}
							if(data.status == "Created"){
								$('.createLi a').addClass('active');
								$('.validateLi a').removeClass('active');
								$('.shpcAppLi a').removeClass('active');
								$('.centerAppLi a').removeClass('active');
								$('.centerAppLi').show();
								$('.centerRejLi').hide();
								$('.approvedProposalDiv').hide();
							}else if(data.status == "Saved" || data.status == "Withdraw"){
								$('.createLi a').removeClass('active');
								$('.validateLi a').addClass('active');
								$('.shpcAppLi a').removeClass('active');
								$('.centerAppLi a').removeClass('active');
								$('.centerAppLi').show();
								$('.centerRejLi').hide();
								$('.approvedProposalDiv').hide();
							}else if(data.status == "SHPC-Approved"){
								$('.createLi a').removeClass('active');
								$('.validateLi a').removeClass('active');
								$('.shpcAppLi a').addClass('active');
								$('.centerAppLi a').removeClass('active');
								$('.centerAppLi').show();
								$('.centerRejLi').hide();
								$('.approvedProposalDiv').hide();
							}else if(data.status == "Center-Approved"){
								$('.createLi a').removeClass('active');
								$('.validateLi a').removeClass('active');
								$('.shpcAppLi a').removeClass('active');
								$('.centerAppLi a').addClass('active');
								$('.centerAppLi').show();
								$('.centerRejLi').hide();
								$('.approvedProposalDiv').hide();
							}else if(data.status == "Returned-by-Centre"){
								$('.createLi a').removeClass('active');
								$('.validateLi a').removeClass('active');
								$('.shpcAppLi a').removeClass('active');
								$('.centerRejLi a').addClass('active');
								$('.centerAppLi').hide();
								$('.centerRejLi').show();
								$('.approvedProposalDiv').show();
								
							}
							$.each(data.stateIHHL,function(key,val){
								console.log(key+" ****  "+val);
								if(val.expenseHead == "IHHL Installment1"){
									//$('.sanihhl1ProposalHead').val(val.heads);
									$('.iHHL1ptpAmount').val(val.physicalProposalTarget);
									$('.iHHL1tpAoumnt').val(val.totalProposalAmount);
									$('.iHHL1requestAmount').val(val.requestFundAmount);
									//$('.sanihhl1financialYear').val(data.financialYear);
									$('.iHHL1dapFileText').val(val.detailedActionPlanName)
									$('.iHHL1dapRefNo').val(val.detailedActionPlanRefNo)
									$('.iHHLucFileText').val(val.ucCertificateName)
									$('.iHHL1ucRefNo').val(val.ucCertificateRefNO)
									$('.iHHL1ProgressFileText').val(val.progressPhotoName)
								//	$('.iHHL1dapFileText').val(val.detailedActionPlanName)
									
									//table view
									/*$('.ihhl1targetAmount').html(119);
									$('.ihhl1fundAllocation').html(322);
									$('.ihhl1proposalTarget').html(val.physicalProposalTarget);
									$('.ihhl1requestAMount').html(val.requestFundAmount);*/
									
								}else if(val.expenseHead == "IHHL Installment2"){
									/*$('.ihhl2targetAmount').html(23);
									$('.ihhl2fundAllocation').html(3);
									$('.ihhl2proposalTarget').html(val.physicalProposalTarget);
									$('.ihhl2requestAMount').html(val.requestFundAmount);*/
									
									$('.iHHL2ptpAmount').val(val.physicalProposalTarget);
									$('.iHHL2tpAoumnt').val(val.totalProposalAmount);
									$('.iHHL2requestAmount').val(val.requestFundAmount);
									$('.iHHL2Remarks').val(data.remarks);
									$('.iHHL2dapFileText').val(val.detailedActionPlanName);
									$('.iHHL2dapRefNo').val(val.detailedActionPlanRefNo);
									$('.iHHL2ucFileText').val(val.ucCertificateName);
									$('.iHHL2ucRefNo').val(val.ucCertificateRefNO);
									$('.iHHL2ProgressFileText').val(val.progressPhotoName);
									$('.financialFileText').val(val.detailedActionPlanName);
									
								}
								
							});
							 if(data.stateCTPT != "" && data.stateCTPT != undefined){
									/*$('.ctpttargetAmount').html(34);
									$('.ctptfundAllocation').html(234);
									$('.ctptproposalTarget').html(val.physicalProposalTarget);
									$('.ctptrequestAMount').html(val.requestFundAmount);*/
									
									$('.cTPTptpAmount').val(data.stateCTPT.physicalProposalTarget);
									$('.cTPTtotalProjectCost').val(data.stateCTPT.totalProjectCost);
									$('.ctptCentralAssiatance').val(data.stateCTPT.centralAssistanceSought);
									$('.ctptStateContribution').val(data.stateCTPT.stateContribution);
									$('.ctptOthers').val(data.stateCTPT.others);
									$('.cTPTDescription').val(data.stateCTPT.description);
									$('.cTPTdapFileText').val(data.stateCTPT.detailedActionPlanName)
									$('.cTPTdapRefNo').val(data.stateCTPT.detailedActionPlanRefNo)
									$('.cTPTucFileText').val(data.stateCTPT.ucCertificateName)
									$('.cTPTucRefNo').val(data.stateCTPT.ucCertificateRefNO)
									$('.cTPTProgressFileText').val(data.stateCTPT.progressPhotoName)
									
									
								}
							 $.each(data.stateSWM , function(key,val){
								 
								 if(val.expenseHead == "SWM Installment1"){
									 
										/*$('.swmtargetAmount').html(423);
										$('.swmfundAllocation').html(22);
										$('.swmproposalTarget').html(val.physicalProposalTarget);
										$('.swmrequestAMount').html(val.requestFundAmount);*/
										
										$('.swmGrandTotal').val(val.totalProjectCost);
										$('.swmGrandCentralAssisTotal').val(val.centralAssistanceSought);
										$('.swmGrandStateContriTotal').val(val.stateContribution);
										$('.swmGrandOthersCostTotal').val(val.others);
									//	$('.swmRemarks').val(val.description);
										$('.swmdapFileText').val(val.detailedActionPlanName)
										$('.swmdapRefNo').val(val.detailedActionPlanRefNo)
										$('.swmucFileText').val(val.ucCertificateName)
										$('.swmucRefNo').val(val.ucCertificateRefNO)
										$('.swmProgressFileText').val(val.progressPhotoName)
										$.each(val.swmsubprojetcs ,function(key,val){
											console.log(key+"*********"+val);
											if(key == 0){
												$('.swmtotalProjectCost').val(val.totalProjectCost);
												$('.swmCentralAssiatance').val(val.centralAssistanceSought);
												$('.swmStateContribution').val(val.stateContribution);
												$('.swmOthers').val(val.others);
												$('.swmdescription').val(val.description);
												$('.swmSubProjectName').val(val.swmSubProjectName)
											}else{
												$('.addSubProject').closest('.row').prepend("<div class=\"subProDetailsdiv\">	<div class=\"row\">	<div class=\"col-sm-4\">" +
														"<div class=\"form-group\">	<label for=\"\">Sub Project Name  (cr)</label> " +
														"<input	type=\"text\" name=\"\" class=\"form-control swmSubProjectName\" value="+val.swmSubProjectName+"></div>	</div>" +
														"<div class=\"col-sm-4\">	<div class=\"form-group\"><label for=\"\">Project Description</label>" +
																"<textarea class=\"form-control swmdescription\" rows=\"4\" >"+val.description+"</textarea>" +
																"</div>	</div><div class=\"col-sm-4\"><div class=\"form-group\">" +
																"<label for=\"\">Total Sub Project Cost (cr)</label>" +
																" <input type=\"text\" name=\"\" class=\"form-control swmtotalProjectCost\"  value="+val.totalProjectCost+"></div></div>" +
																"</div><div class=\"row\"><div class=\"col-sm-4\"><div class=\"form-group\">" +
																"<label for=\"\">Central Assistance (cr)</label>" +
																" <input type=\"text\" name=\"\" class=\"form-control swmCentralAssiatance\"  value="+val.centralAssistanceSought+"></div>	</div>" +
																"<div class=\"col-sm-4\"><div class=\"form-group\">	<label for=\"\">State Contribution (cr)</label>" +
																" <input type=\"text\" name=\"\" class=\"form-control swmStateContribution\"  value="+val.stateContribution+"></div>	</div>" +
																"<div class=\"col-sm-4\"><div class=\"form-group\"><label for=\"\">Others (cr)</label>" +
																"<input	type=\"text\" name=\"\" class=\"form-control swmOthers\"  value="+val.others+"></div></div></div></div>");
											
										
											}
										});
										
									} else if(val.expenseHead == "SWM Installment2"){
									 
										/*$('.swmtargetAmount').html(423);
										$('.swmfundAllocation').html(22);
										$('.swmproposalTarget').html(val.physicalProposalTarget);
										$('.swmrequestAMount').html(val.requestFundAmount);*/
										
										$('.swm2GrandTotal').val(val.totalProjectCost);
										$('.swm2GrandCentralAssisTotal').val(val.centralAssistanceSought);
										$('.swm2GrandStateContriTotal').val(val.stateContribution);
										$('.swm2GrandOthersCostTotal').val(val.others);
									//	$('.swmRemarks').val(val.description);
										$('.swm2dapFileText').val(val.detailedActionPlanName)
										$('.swm2dapRefNo').val(val.detailedActionPlanRefNo)
										$('.swm2ucFileText').val(val.ucCertificateName)
										$('.swm2ucRefNo').val(val.ucCertificateRefNO)
										$('.swm2ProgressFileText').val(val.progressPhotoName)
										$.each(val.swmsubprojetcs ,function(key,val){
											console.log(key+"*********"+val);
											if(key == 0){
												$('.swm2totalProjectCost').val(val.totalProjectCost);
												$('.swm2CentralAssiatance').val(val.centralAssistanceSought);
												$('.swm2StateContribution').val(val.stateContribution);
												$('.swm2Others').val(val.others);
												$('.swm2description').val(val.description);
												$('.swm2SubProjectName').val(val.swmSubProjectName)
											}else{
												$('.swm2addSubProject').closest('.row').prepend("<div class=\"swm2subProDetailsdiv\">	<div class=\"row\">	<div class=\"col-sm-4\">" +
														"<div class=\"form-group\">	<label for=\"\">Sub Project Name  (cr)</label> " +
														"<input	type=\"text\" name=\"\" class=\"form-control swm2SubProjectName\" value="+val.swmSubProjectName+"></div>	</div>" +
														"<div class=\"col-sm-4\">	<div class=\"form-group\"><label for=\"\">Project Description</label>" +
																"<textarea class=\"form-control swm2description\" rows=\"4\" >"+val.description+"</textarea>" +
																"</div>	</div><div class=\"col-sm-4\"><div class=\"form-group\">" +
																"<label for=\"\">Total Sub Project Cost (cr)</label>" +
																" <input type=\"text\" name=\"\" class=\"form-control swm2totalProjectCost\"  value="+val.totalProjectCost+"></div></div>" +
																"</div><div class=\"row\"><div class=\"col-sm-4\"><div class=\"form-group\">" +
																"<label for=\"\">Central Assistance (cr)</label>" +
																" <input type=\"text\" name=\"\" class=\"form-control swm2CentralAssiatance\"  value="+val.centralAssistanceSought+"></div>	</div>" +
																"<div class=\"col-sm-4\"><div class=\"form-group\">	<label for=\"\">State Contribution (cr)</label>" +
																" <input type=\"text\" name=\"\" class=\"form-control swm2StateContribution\"  value="+val.stateContribution+"></div>	</div>" +
																"<div class=\"col-sm-4\"><div class=\"form-group\"><label for=\"\">Others (cr)</label>" +
																"<input	type=\"text\" name=\"\" class=\"form-control swm2Others\"  value="+val.others+"></div></div></div></div>");
											
										
											}
										});
										
									}
							 });
							  if(data.stateIEC != "" && data.stateIEC != undefined){
									/*$('.iectargetAmount').html(343);
									$('.iecfundAllocation').html(22);
									$('.iecproposalTarget').html(val.physicalProposalTarget);
									$('.iecrequestAMount').html(val.requestFundAmount);*/
									
								  	//$('.cTPTptpAmount').val(val.physicalProposalTarget);
									$('.iectotalProjectCost').val(data.stateIEC.totalProjectCost);
									$('.iecCentralAssiatance').val(data.stateIEC.centralAssistanceSought);
									$('.iecStateContribution').val(data.stateIEC.stateContribution);
									$('.iecOthers').val(data.stateIEC.others);
									$('.iecDescription').val(data.stateIEC.description);
									$('.iecdapFileText').val(data.stateIEC.detailedActionPlanName);
									$('.iecdapRefNo').val(data.stateIEC.detailedActionPlanRefNo);
									$('.iecucFileText').val(data.stateIEC.ucCertificateName);
									$('.iecucRefNo').val(data.stateIEC.ucCertificateRefNO);
									$('.iecProgressFileText').val(data.stateIEC.progressPhotoName)
								}
							  if(data.stateCBAOE != "" && data.stateCBAOE != undefined){
									/*$('.cbAoetargetAmount').html(223);
									$('.cbAoefundAllocation').html(34);
									$('.cbAoeproposalTarget').html(val.physicalProposalTarget);
									$('.cbAoerequestAMount').html(val.requestFundAmount);*/
									
								    $('.cbAoetotalProjectCost').val(data.stateCBAOE.totalProjectCost);
									$('.cbAoeCentralAssiatance').val(data.stateCBAOE.centralAssistanceSought);
									$('.cbAoeStateContribution').val(data.stateCBAOE.stateContribution);
									$('.cbAoeOthers').val(data.stateCBAOE.others);
									$('.cbAoeDescription').val(data.stateCBAOE.description);
									$('.cbAoedapFileText').val(data.stateCBAOE.detailedActionPlanName)
									$('.cbAoedapRefNo').val(data.stateCBAOE.detailedActionPlanRefNo)
									$('.cbAoeucFileText').val(data.stateCBAOE.ucCertificateName)
									$('.cbAoeucRefNo').val(data.stateCBAOE.ucCertificateRefNO)
									$('.cbAoeProgressFileText').val(data.stateCBAOE.progressPhotoName)
									
								}
							$('.proposalName').val(data.proposalName);
							$('.proposalStatus').val(data.status);
							/*$('.ptpAmount').val(data.physicalProposalTarget);
							$('.tpAoumnt').val(data.totalProposalAmount);
							$('.requestAmount').val(data.requestFundAmount);
							$('.remarks').val(data.remarks);
							$('.dapRefNo').val(data.detailedActionPlanRefNo);
							$('.ucRefNo').val(data.ucCertificateRefNO);*/
							//$('.dapRefNo').val(data.proposalName);
							
							
							/*$('.dapFileText').val(data.detailedActionPlanName);
							$('.ucFileText').val(data.ucCertificateName);
							$('.progressFileText').val(data.progressPhotoName);
							$('.shpcFileText').val(data.shpcApprovalName);
							$('.shpcRefNo').val(data.shpcApprovalRefNO);*/
						}
					});
					$.ajax({
						url:"/SBMFundRequisition/fund/read/getSanctionDetailsByState",
						type:"POST",
						dataType:'json',
						headers: headerData,
						data:JSON.stringify(stateDetails),
						contentType:"application/json",
						success:function(data){
							console.log(data)
						}
					});
					$.ajax({
						url:"/SBMFundRequisition/fund/read/getUtilisationByState",
						type:"POST",
						dataType:'json',
						headers: headerData,
						contentType:"application/json",
						data:JSON.stringify(stateDetails),
						success:function(data){
							$.each(data,function(key,val){
								console.log(key+"----"+val);
								$('.proposedUtilizedFunds').val(val.utilizationAmountTillDate)
							});
							
							console.log(data)
						}
					});
		           // $("#checkbox1").attr("disabled", "disabled"); 
			});
			
			$('.withDrawProposal').on('click',function(){
				var proposalMasterData = new Object();
				proposalMasterData= editProposal;
				proposalMasterData.status="Withdraw";
				//editProposal.status="Saved"
				$.ajax({
					url:"/SBMFundRequisition/fund/create/withDrawProposal",
					type:"POST",
					headers: headerData,
					data:JSON.stringify(proposalMasterData),
					dataType:'json',
					contentType:"application/json",
					success:function(data){
						getProposalsByStateTable(data);
					}
				});
			});
			
		},
		sanctionProposalByState:function(){
			$(document).on('click','.sanctionProposal',function(){
				var proposalData= new Object();
				proposalData.proposalId= $(this).closest('tr').attr('Id');
				$.ajax({
					url:"/SBMFundRequisition/fund/read/getProposalById",
					type:"POST",
					headers: headerData,
					data:JSON.stringify(proposalData),
					dataType:'json',
					contentType:"application/json",
					success:function(data){
						console.log(data)
						editProposal= new Object();
						editProposal= data;
						//$('.proposalName').val(data.proposalName);
					/*	$('.sanPTPAmount').val(data.physicalProposalTarget);
						$('.sanTPAAmount').val(data.totalProposalAmount);
						$('.sanRequestAmount').val(data.requestFundAmount);
						$('.remarks').val(data.remarks);*/
						
						//$('.sanProposalHead').val(data.heads);
						$('.proposalStatus').val(data.status);
						if(data.heads == "IHHL Installment2"){
							$('.sanfinancialDiv').show();
						}else{
							$('.sanfinancialDiv').hide();
						}
						if(data.shpcApprovalName.indexOf(".pdf") >=0 ){
							$('.shpcDocs .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.shpcApprovalPath+"' class=\"btn btn-link\">"+data.shpcApprovalName+"</a></p>");
						}else if(data.shpcApprovalName.indexOf(".jpeg") >=0 ||data.shpcApprovalName.indexOf(".jpg") >=0 ){
							$('.shpcDocs .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.shpcApprovalPath+"' class=\"btn btn-link\">"+data.shpcApprovalName+"</a></p>");
						}
						
						/*if(data.detailedActionPlanName.indexOf(".pdf") >=0 ){
							$('.actionPlanDocs .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.detailedActionPlanPath+"' class=\"btn btn-link\">"+data.detailedActionPlanName+"</a></p>");
						}else if(data.detailedActionPlanName.indexOf(".jpeg") >=0 ||data.detailedActionPlanName.indexOf(".jpg") >=0 ){
							$('.actionPlanDocs .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.detailedActionPlanPath+"' class=\"btn btn-link\">"+data.detailedActionPlanName+"</a></p>");
						}
						if(data.ucCertificateName.indexOf(".pdf") >=0 ){
							$('.ucCertificateDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.ucCertificatePath+"' class=\"btn btn-link\">"+data.ucCertificateName+"</a></p>");
						}else if(data.ucCertificateName.indexOf(".jpeg") >=0 ||data.ucCertificateName.indexOf(".jpg") >=0 ){
							$('.ucCertificateDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.ucCertificatePath+"' class=\"btn btn-link\">"+data.ucCertificateName+"</a></p>");
						}
						if(data.progressPhotoName.indexOf(".pdf") >=0 ){
							$('.progressPhotoDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.progressPhotoPath+"' class=\"btn btn-link\">"+data.progressPhotoName+"</a></p>");
						}else if(data.progressPhotoName.indexOf(".jpeg") >=0 ||data.progressPhotoName.indexOf(".jpg") >=0 ){
							$('.progressPhotoDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.progressPhotoPath+"' class=\"btn btn-link\">"+data.progressPhotoName+"</a></p>");
						}
						
						if(data.financialProgressIhhlContructedName.indexOf(".pdf") >=0 ){
							$('.financialProgressDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.financialProgressIhhlContructedPath+"' class=\"btn btn-link\">"+data.financialProgressIhhlContructedName+"</a></p>");
						}else if(data.financialProgressIhhlContructedName.indexOf(".jpeg") >=0 ||data.financialProgressIhhlContructedName.indexOf(".jpg") >=0 ){
							$('.financialProgressDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.financialProgressIhhlContructedPath+"' class=\"btn btn-link\">"+data.financialProgressIhhlContructedName+"</a></p>");
						}*/
					/*	$('.dapFileText').val(data.detailedActionPlanName);
						$('.ucFileText').val(data.ucCertificateName);
						$('.progressFileText').val(data.progressPhotoName);
						*/
						$('.shpcFileText').val(data.ucCertificateName);
						if(data.status == "validate" || data.status == "created" ){
							$('#shpcApproved').prop('checked', false);
						}else{
							$('#shpcApproved').prop('checked', true);
						}
						if(data.status == "Created"){
							$('.createLi a').addClass('active');
							$('.validateLi a').removeClass('active');
							$('.shpcAppLi a').removeClass('active');
							$('.centerAppLi a').removeClass('active');
						}else if(data.status == "Saved" || data.status == "Withdraw"){
							$('.createLi a').removeClass('active');
							$('.validateLi a').addClass('active');
							$('.shpcAppLi a').removeClass('active');
							$('.centerAppLi a').removeClass('active');
						}else if(data.status == "SHPC-Approved"){
							$('.createLi a').removeClass('active');
							$('.validateLi a').removeClass('active');
							$('.shpcAppLi a').addClass('active');
							$('.centerAppLi a').removeClass('active');
						}else if(data.status == "Center-Approved"){
							
						}
						var subTotal;
						
						
						$.each(data.stateIHHL,function(key,val){
							console.log(key+" ****  "+val);
							if(val.expenseHead == "IHHL Installment1"){
								//$('.sanihhl1ProposalHead').val(val.heads);
								$('.sanihhl1PTPAmount').val(val.physicalProposalTarget);
								$('.sanihh1TPAAmount').val(val.totalProposalAmount);
								$('.sanihhl1RequestAmount').val(val.requestFundAmount);
								//$('.sanihhl1financialYear').val(data.financialYear);
								if(val.detailedActionPlanName.indexOf(".pdf") >=0 ){
									$('.ihhl1actionPlanDocs .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.detailedActionPlanPath+"' class=\"btn btn-link\">"+val.detailedActionPlanName+"</a></p>");
									}else if(val.detailedActionPlanName.indexOf(".jpeg") >=0 ||val.detailedActionPlanName.indexOf(".jpg") >=0 ){
									$('.ihhl1actionPlanDocs .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.detailedActionPlanPath+"' class=\"btn btn-link\">"+val.detailedActionPlanName+"</a></p>");
									}
									if(val.ucCertificateName.indexOf(".pdf") >=0 ){
									$('.ihhl1ucCertificateDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.ucCertificatePath+"' class=\"btn btn-link\">"+val.ucCertificateName+"</a></p>");
									}else if(val.ucCertificateName.indexOf(".jpeg") >=0 ||val.ucCertificateName.indexOf(".jpg") >=0 ){
									$('.ihhl1ucCertificateDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.ucCertificatePath+"' class=\"btn btn-link\">"+val.ucCertificateName+"</a></p>");
									}
									if(val.progressPhotoName.indexOf(".pdf") >=0 ){
									$('.ihhl1progressPhotoDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.progressPhotoPath+"' class=\"btn btn-link\">"+val.progressPhotoName+"</a></p>");
									}else if(val.progressPhotoName.indexOf(".jpeg") >=0 ||val.progressPhotoName.indexOf(".jpg") >=0 ){
									$('.ihhl1progressPhotoDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.progressPhotoPath+"' class=\"btn btn-link\">"+val.progressPhotoName+"</a></p>");
									}


									//table view
									$('.ihhl1targetAmount').html(119);
									$('.ihhl1fundAllocation').html(322);
									$('.ihhl1proposalTarget').html(val.physicalProposalTarget);
									$('.ihhl1requestAMount').html(val.requestFundAmount);
									subTotal=subTotal+val.requestFundAmount;

								
							}else if(val.expenseHead == "IHHL Installment2"){
								/*$('.ihhl2targetAmount').html(23);
								$('.ihhl2fundAllocation').html(3);
								$('.ihhl2proposalTarget').html(val.physicalProposalTarget);
								$('.ihhl2requestAMount').html(val.requestFundAmount);*/
								
								$('.sanihhl2PTPAmount').val(val.physicalProposalTarget);
								$('.sanihhl2TPAAmount').val(val.totalProposalAmount);
								$('.sanihhl2RequestAmount').val(val.requestFundAmount);
								$('.sanihhl2financialYear').val(val.financialYear);
								//$('.iHHL2Remarks').val(data.remarks);
								
								if(val.detailedActionPlanName.indexOf(".pdf") >=0 ){
									$('.ihhl2actionPlanDocs .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.detailedActionPlanPath+"' class=\"btn btn-link\">"+val.detailedActionPlanName+"</a></p>");
									}else if(val.detailedActionPlanName.indexOf(".jpeg") >=0 ||val.detailedActionPlanName.indexOf(".jpg") >=0 ){
									$('.ihhl2actionPlanDocs .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.detailedActionPlanPath+"' class=\"btn btn-link\">"+val.detailedActionPlanName+"</a></p>");
									}
									if(val.ucCertificateName.indexOf(".pdf") >=0 ){
									$('.ihhl2ucCertificateDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.ucCertificatePath+"' class=\"btn btn-link\">"+val.ucCertificateName+"</a></p>");
									}else if(val.ucCertificateName.indexOf(".jpeg") >=0 ||val.ucCertificateName.indexOf(".jpg") >=0 ){
									$('.ihhl2ucCertificateDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.ucCertificatePath+"' class=\"btn btn-link\">"+val.ucCertificateName+"</a></p>");
									}
									if(val.progressPhotoName.indexOf(".pdf") >=0 ){
									$('.ihhl2progressPhotoDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.progressPhotoPath+"' class=\"btn btn-link\">"+val.progressPhotoName+"</a></p>");
									}else if(val.progressPhotoName.indexOf(".jpeg") >=0 ||val.progressPhotoName.indexOf(".jpg") >=0 ){
									$('.ihhl2progressPhotoDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.progressPhotoPath+"' class=\"btn btn-link\">"+val.progressPhotoName+"</a></p>");
									}

									if(val.financialProgressIhhlContructedName.indexOf(".pdf") >=0 ){
									$('.financialProgressDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.financialProgressIhhlContructedPath+"' class=\"btn btn-link\">"+val.financialProgressIhhlContructedName+"</a></p>");
									}else if(val.financialProgressIhhlContructedName.indexOf(".jpeg") >=0 ||data.financialProgressIhhlContructedName.indexOf(".jpg") >=0 ){
									$('.financialProgressDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.financialProgressIhhlContructedPath+"' class=\"btn btn-link\">"+valta.financialProgressIhhlContructedName+"</a></p>");
									}
									subTotal=subTotal+val.requestFundAmount;
									$('.ihhl2targetAmount').html(23);
									$('.ihhl2fundAllocation').html(3);
									$('.ihhl2proposalTarget').html(val.physicalProposalTarget);
									$('.ihhl2requestAMount').html(val.requestFundAmount);
							}
							
						});
						 if(data.stateCTPT != "" && data.stateCTPT != undefined){
								/*$('.ctpttargetAmount').html(34);
								$('.ctptfundAllocation').html(234);
								$('.ctptproposalTarget').html(val.physicalProposalTarget);
								$('.ctptrequestAMount').html(val.requestFundAmount);*/
								
							 	$('.ctpttargetAmount').html(34);
								$('.ctptfundAllocation').html(234);
								$('.ctptproposalTarget').html(data.physicalProposalTarget);
								$('.ctptrequestAMount').html(data.requestFundAmount);
								
								$('.sancTPTptpAmount').val(data.stateCTPT.physicalProposalTarget);
								$('.sancTPTtotalProjectCost').val(data.stateCTPT.totalProjectCost);
								$('.sanctptCentralAssiatance').val(data.stateCTPT.centralAssistanceSought);
								$('.sanctptStateContribution').val(data.stateCTPT.stateContribution);
								$('.sanctptOthers').val(data.stateCTPT.others);
								$('.sancTPTDescription').val(data.stateCTPT.description);
								$('.sanctptfinancialYear').val(data.stateCTPT.financialYear)
								
								if(data.stateCTPT.detailedActionPlanName.indexOf(".pdf") >=0 ){
									$('.ctptactionPlanDocs .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateCTPT.detailedActionPlanPath+"' class=\"btn btn-link\">"+data.stateCTPT.detailedActionPlanName+"</a></p>");
									}else if(data.stateCTPT.detailedActionPlanName.indexOf(".jpeg") >=0 ||data.stateCTPT.detailedActionPlanName.indexOf(".jpg") >=0 ){
									$('.ctptactionPlanDocs .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateCTPT.detailedActionPlanPath+"' class=\"btn btn-link\">"+data.stateCTPT.detailedActionPlanName+"</a></p>");
									}
									if(data.stateCTPT.ucCertificateName.indexOf(".pdf") >=0 ){
									$('.ctptucCertificateDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateCTPT.ucCertificatePath+"' class=\"btn btn-link\">"+data.stateCTPT.ucCertificateName+"</a></p>");
									}else if(data.stateCTPT.ucCertificateName.indexOf(".jpeg") >=0 ||data.stateCTPT.ucCertificateName.indexOf(".jpg") >=0 ){
									$('.ctptucCertificateDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateCTPT.ucCertificatePath+"' class=\"btn btn-link\">"+data.stateCTPT.ucCertificateName+"</a></p>");
									}
									if(data.stateCTPT.progressPhotoName.indexOf(".pdf") >=0 ){
									$('.ctptprogressPhotoDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateCTPT.progressPhotoPath+"' class=\"btn btn-link\">"+data.stateCTPT.progressPhotoName+"</a></p>");
									}else if(data.stateCTPT.progressPhotoName.indexOf(".jpeg") >=0 ||data.stateCTPT.progressPhotoName.indexOf(".jpg") >=0 ){
									$('.ctptprogressPhotoDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateCTPT.progressPhotoPath+"' class=\"btn btn-link\">"+data.stateCTPT.progressPhotoName+"</a></p>");
									}
									subTotal=subTotal+data.stateCTPT.requestFundAmount;

								
							}
						 $.each(data.stateSWM , function(key,val){
							 
							 if(val.expenseHead == "SWM Installment1"){
								 
								 $('.swmtargetAmount').html(423);
								 $('.swmfundAllocation').html(22);
								 $('.swmproposalTarget').html(val.physicalProposalTarget);
								 $('.swmrequestAMount').html(val.requestFundAmount);
									
									$('.sanswmGrandTotal').val(val.totalProjectCost);
									$('.sanswmGrandCentralAssisTotal').val(val.centralAssistanceSought);
									$('.sanswmGrandStateContriTotal').val(val.stateContribution);
									$('.sanswmGrandOthersCostTotal').val(val.others);
									
									$('.sanswmfinancialYear').val(val.financialYear);
									
									if(val.detailedActionPlanName.indexOf(".pdf") >=0 ){
										$('.swmactionPlanDocs .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.detailedActionPlanPath+"' class=\"btn btn-link\">"+val.detailedActionPlanName+"</a></p>");
										}else if(val.detailedActionPlanName.indexOf(".jpeg") >=0 ||val.detailedActionPlanName.indexOf(".jpg") >=0 ){
										$('.swmactionPlanDocs .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.detailedActionPlanPath+"' class=\"btn btn-link\">"+val.detailedActionPlanName+"</a></p>");
										}
										if(val.ucCertificateName.indexOf(".pdf") >=0 ){
										$('.swmucCertificateDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.ucCertificatePath+"' class=\"btn btn-link\">"+val.ucCertificateName+"</a></p>");
										}else if(val.ucCertificateName.indexOf(".jpeg") >=0 ||val.ucCertificateName.indexOf(".jpg") >=0 ){
										$('.swmucCertificateDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.ucCertificatePath+"' class=\"btn btn-link\">"+val.ucCertificateName+"</a></p>");
										}
										if(val.progressPhotoName.indexOf(".pdf") >=0 ){
										$('.swmprogressPhotoDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.progressPhotoPath+"' class=\"btn btn-link\">"+val.progressPhotoName+"</a></p>");
										}else if(val.progressPhotoName.indexOf(".jpeg") >=0 ||val.progressPhotoName.indexOf(".jpg") >=0 ){
										$('.swmprogressPhotoDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.progressPhotoPath+"' class=\"btn btn-link\">"+val.progressPhotoName+"</a></p>");
										}

										subTotal=subTotal+val.requestFundAmount;
										
									$.each(val.swmsubprojetcs ,function(key,val){
										console.log(key+"*********"+val);
										if(key == 0){
											$('.sanswmtotalProjectCost').val(val.totalProjectCost);
											$('.sanswmCentralAssiatance').val(val.centralAssistanceSought);
											$('.sanswmStateContribution').val(val.stateContribution);
											$('.sanswmOthers').val(val.others);
											$('.sanswmdescription').val(val.description);
											$('.sanswmSubProjectName').val(val.swmSubProjectName)
										}else{
											$('.sanswmaddSubProject').closest('.row').prepend("<div class=\"subProDetailsdiv\">	<div class=\"row\">	<div class=\"col-sm-4\">" +
													"<div class=\"form-group\">	<label for=\"\">Sub Project Name  (cr)</label> " +
													"<input	type=\"text\" name=\"\" class=\"form-control swmSubProjectName\" value="+val.swmSubProjectName+"></div>	</div>" +
													"<div class=\"col-sm-4\">	<div class=\"form-group\"><label for=\"\">Project Description</label>" +
															"<textarea class=\"form-control swmdescription\" rows=\"4\" >"+val.description+"</textarea>" +
															"</div>	</div><div class=\"col-sm-4\"><div class=\"form-group\">" +
															"<label for=\"\">Total Sub Project Cost (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swmtotalProjectCost\"  value="+val.totalProjectCost+"></div></div>" +
															"</div><div class=\"row\"><div class=\"col-sm-4\"><div class=\"form-group\">" +
															"<label for=\"\">Central Assistance (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swmCentralAssiatance\"  value="+val.centralAssistanceSought+"></div>	</div>" +
															"<div class=\"col-sm-4\"><div class=\"form-group\">	<label for=\"\">State Contribution (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swmStateContribution\"  value="+val.stateContribution+"></div>	</div>" +
															"<div class=\"col-sm-4\"><div class=\"form-group\"><label for=\"\">Others (cr)</label>" +
															"<input	type=\"text\" name=\"\" class=\"form-control swmOthers\"  value="+val.others+"></div></div></div></div>");
										
									
										}
									});
									
								} else if(val.expenseHead == "SWM Installment2"){
								 
									$('.swm2targetAmount').html(423);
									$('.swm2fundAllocation').html(22);
									//$('.swm2proposalTarget').html(val.physicalProposalTarget);
									$('.swm2requestAMount').html(val.requestFundAmount);
									
									$('.sanswm2GrandTotal').val(val.totalProjectCost);
									$('.sanswm2GrandCentralAssisTotal').val(val.centralAssistanceSought);
									$('.sanswm2GrandStateContriTotal').val(val.stateContribution);
									$('.sanswm2GrandOthersCostTotal').val(val.others);
								//	$('.swmRemarks').val(val.description);
									if(val.detailedActionPlanName.indexOf(".pdf") >=0 ){
										$('.swm2actionPlanDocs .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.detailedActionPlanPath+"' class=\"btn btn-link\">"+val.detailedActionPlanName+"</a></p>");
										}else if(val.detailedActionPlanName.indexOf(".jpeg") >=0 ||val.detailedActionPlanName.indexOf(".jpg") >=0 ){
										$('.swm2actionPlanDocs .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.detailedActionPlanPath+"' class=\"btn btn-link\">"+val.detailedActionPlanName+"</a></p>");
										}
										if(val.ucCertificateName.indexOf(".pdf") >=0 ){
										$('.swm2ucCertificateDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.ucCertificatePath+"' class=\"btn btn-link\">"+val.ucCertificateName+"</a></p>");
										}else if(val.ucCertificateName.indexOf(".jpeg") >=0 ||val.ucCertificateName.indexOf(".jpg") >=0 ){
										$('.swm2ucCertificateDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.ucCertificatePath+"' class=\"btn btn-link\">"+val.ucCertificateName+"</a></p>");
										}
										if(val.progressPhotoName.indexOf(".pdf") >=0 ){
										$('.swm2progressPhotoDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.progressPhotoPath+"' class=\"btn btn-link\">"+val.progressPhotoName+"</a></p>");
										}else if(val.progressPhotoName.indexOf(".jpeg") >=0 ||val.progressPhotoName.indexOf(".jpg") >=0 ){
										$('.swm2progressPhotoDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+val.progressPhotoPath+"' class=\"btn btn-link\">"+val.progressPhotoName+"</a></p>");
										}

										subTotal=subTotal+val.requestFundAmount;
									$.each(val.swmsubprojetcs ,function(key,val){
										console.log(key+"*********"+val);
										if(key == 0){
											$('.sanswm2totalProjectCost').val(val.totalProjectCost);
											$('.sanswm2CentralAssiatance').val(val.centralAssistanceSought);
											$('.sanswm2StateContribution').val(val.stateContribution);
											$('.sanswm2Others').val(val.others);
											$('.sanswm2description').val(val.description);
											$('.sanswm2SubProjectName').val(val.swmSubProjectName)
										}else{
											$('.sanswm2addSubProject').closest('.row').prepend("<div class=\"swm2subProDetailsdiv\">	<div class=\"row\">	<div class=\"col-sm-4\">" +
													"<div class=\"form-group\">	<label for=\"\">Sub Project Name  (cr)</label> " +
													"<input	type=\"text\" name=\"\" class=\"form-control swm2SubProjectName\" value="+val.swmSubProjectName+"></div>	</div>" +
													"<div class=\"col-sm-4\">	<div class=\"form-group\"><label for=\"\">Project Description</label>" +
															"<textarea class=\"form-control swm2description\" rows=\"4\" >"+val.description+"</textarea>" +
															"</div>	</div><div class=\"col-sm-4\"><div class=\"form-group\">" +
															"<label for=\"\">Total Sub Project Cost (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swm2totalProjectCost\"  value="+val.totalProjectCost+"></div></div>" +
															"</div><div class=\"row\"><div class=\"col-sm-4\"><div class=\"form-group\">" +
															"<label for=\"\">Central Assistance (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swm2CentralAssiatance\"  value="+val.centralAssistanceSought+"></div>	</div>" +
															"<div class=\"col-sm-4\"><div class=\"form-group\">	<label for=\"\">State Contribution (cr)</label>" +
															" <input type=\"text\" name=\"\" class=\"form-control swm2StateContribution\"  value="+val.stateContribution+"></div>	</div>" +
															"<div class=\"col-sm-4\"><div class=\"form-group\"><label for=\"\">Others (cr)</label>" +
															"<input	type=\"text\" name=\"\" class=\"form-control swm2Others\"  value="+val.others+"></div></div></div></div>");
										
									
										}
									});
									
								}
						 });
						  if(data.stateIEC != "" && data.stateIEC != undefined){
							  $('.iectargetAmount').html(343);
							  $('.iecfundAllocation').html(22);
							  //$('.iecproposalTarget').html(val.physicalProposalTarget);
							  $('.iecrequestAMount').html(data.requestFundAmount);

								$('.saniectotalProjectCost').val(data.stateIEC.totalProjectCost);
								$('.saniecCentralAssiatance').val(data.stateIEC.centralAssistanceSought);
								$('.saniecStateContribution').val(data.stateIEC.stateContribution);
								$('.saniecOthers').val(data.stateIEC.others);
								$('.saniecDescription').val(data.stateIEC.description);
								$('.saniecfinancialYear').val(data.stateIEC.financialYear);
								if(data.stateIEC.detailedActionPlanName.indexOf(".pdf") >=0 ){
									$('.iecactionPlanDocs .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateIEC.detailedActionPlanPath+"' class=\"btn btn-link\">"+data.stateIEC.detailedActionPlanName+"</a></p>");
									}else if(data.stateIEC.detailedActionPlanName.indexOf(".jpeg") >=0 ||data.stateIEC.detailedActionPlanName.indexOf(".jpg") >=0 ){
									$('.iecactionPlanDocs .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateIEC.detailedActionPlanPath+"' class=\"btn btn-link\">"+data.stateIEC.detailedActionPlanName+"</a></p>");
									}
									if(data.stateIEC.ucCertificateName.indexOf(".pdf") >=0 ){
									$('.iecucCertificateDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateIEC.ucCertificatePath+"' class=\"btn btn-link\">"+data.stateIEC.ucCertificateName+"</a></p>");
									}else if(data.stateIEC.ucCertificateName.indexOf(".jpeg") >=0 ||data.stateIEC.ucCertificateName.indexOf(".jpg") >=0 ){
									$('.iecucCertificateDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateIEC.ucCertificatePath+"' class=\"btn btn-link\">"+data.stateIEC.ucCertificateName+"</a></p>");
									}
									if(data.stateIEC.progressPhotoName.indexOf(".pdf") >=0 ){
									$('.iecprogressPhotoDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateIEC.progressPhotoPath+"' class=\"btn btn-link\">"+data.stateIEC.progressPhotoName+"</a></p>");
									}else if(data.stateIEC.progressPhotoName.indexOf(".jpeg") >=0 ||data.stateIEC.progressPhotoName.indexOf(".jpg") >=0 ){
									$('.iecprogressPhotoDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateIEC.progressPhotoPath+"' class=\"btn btn-link\">"+data.stateIEC.progressPhotoName+"</a></p>");
									}
									subTotal=subTotal+data.stateIEC.requestFundAmount;
							}
						  if(data.stateCBAOE != "" && data.stateCBAOE != undefined){
							  $('.cbAoetargetAmount').html(223);
							  $('.cbAoefundAllocation').html(34);
							  //$('.cbAoeproposalTarget').html(data.physicalProposalTarget);
							  $('.cbAoerequestAMount').html(data.requestFundAmount);
								
							    $('.sancbAoetotalProjectCost').val(data.stateCBAOE.totalProjectCost);
								$('.sancbAoeCentralAssiatance').val(data.stateCBAOE.centralAssistanceSought);
								$('.sancbAoeStateContribution').val(data.stateCBAOE.stateContribution);
								$('.sancbAoeOthers').val(data.stateCBAOE.others);
								$('.sancbAoeDescription').val(data.stateCBAOE.description);
								$('.sancbAoefinancialYear').val(data.stateCBAOE.financialYear)
								if(data.stateCBAOE .detailedActionPlanName.indexOf(".pdf") >=0 ){
									$('.cbAoeactionPlanDocs .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateCBAOE.detailedActionPlanPath+"' class=\"btn btn-link\">"+data.stateCBAOE.detailedActionPlanName+"</a></p>");
									}else if(data.stateCBAOE .detailedActionPlanName.indexOf(".jpeg") >=0 ||data.stateCBAOE .detailedActionPlanName.indexOf(".jpg") >=0 ){
									$('.cbAoeactionPlanDocs .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateCBAOE.detailedActionPlanPath+"' class=\"btn btn-link\">"+data.stateCBAOE.detailedActionPlanName+"</a></p>");
									}
									if(data.stateCBAOE .ucCertificateName.indexOf(".pdf") >=0 ){
									$('.cbAoeucCertificateDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateCBAOE.ucCertificatePath+"' class=\"btn btn-link\">"+data.stateCBAOE.ucCertificateName+"</a></p>");
									}else if(data.stateCBAOE .ucCertificateName.indexOf(".jpeg") >=0 ||data.stateCBAOE .ucCertificateName.indexOf(".jpg") >=0 ){
									$('.cbAoeucCertificateDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateCBAOE.ucCertificatePath+"' class=\"btn btn-link\">"+data.stateCBAOE.ucCertificateName+"</a></p>");
									}
									if(data.stateCBAOE .progressPhotoName.indexOf(".pdf") >=0 ){
									$('.cbAoeprogressPhotoDoc .col-sm-2').html("<img src=\"images/pdf.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateCBAOE.progressPhotoPath+"' class=\"btn btn-link\">"+data.stateCBAOE.progressPhotoName+"</a></p>");
									}else if(data.stateCBAOE .progressPhotoName.indexOf(".jpeg") >=0 ||data.stateCBAOE .progressPhotoName.indexOf(".jpg") >=0 ){
									$('.cbAoeprogressPhotoDoc .col-sm-2').html("<img src=\"images/jpeg.svg\">	<p>	<a target=\"_blank\" href='http://183.82.144.250:8080"+data.stateCBAOE.progressPhotoPath+"' class=\"btn btn-link\">"+data.stateCBAOE.progressPhotoName+"</a></p>");
									}
									subTotal=subTotal+data.stateCBAOE.requestFundAmount;
								
							}
						
					}
				});
			});
			var grand_total=0;
			$(document).on('focusout','.ihhl1AmountApproved',function(){
				grand_total=grand_total+parseInt($(".ihhl1AmountApproved").val(), 10);
				$('.sanApproveAmount').val(grand_total);
			});
			$(document).on('focusout','.ihhl2AmountApproved',function(){
				grand_total=grand_total+parseInt($(".ihhl2AmountApproved").val(), 10);
				$('.sanApproveAmount').val(grand_total);
			});
			$(document).on('focusout','.ctptAmountApproved',function(){
				grand_total=grand_total+parseInt($(".ctptAmountApproved").val(), 10);
				$('.sanApproveAmount').val(grand_total);
			});
			$(document).on('focusout','.swmAmountApproved',function(){
				grand_total=grand_total+parseInt($(".swmAmountApproved").val(), 10);
				$('.sanApproveAmount').val(grand_total);
			});
			$(document).on('focusout','.iecAmountApproved',function(){
				grand_total=grand_total+parseInt($(".iecAmountApproved").val(), 10);
				$('.sanApproveAmount').val(grand_total);
			});
			$(document).on('focusout','.cbAoeAmountApproved',function(){
				grand_total=grand_total+parseInt($(".cbAoeAmountApproved").val(), 10);
				$('.sanApproveAmount').val(grand_total);
			});
			//Approve Sanction
			$('.approveSanction').on('click',function(){
				var sanctionHeadMasterList=[];
				var sanctionMaster = new Object();
				$.each(editProposal.proposalHeadMaster,function(key,val){
					if(val.heads == "IHHL Installment1"){
						var sanctionHeadMasterData= new Object();
						var stateCodeData= new Object();
						stateCodeData.stateCode=editProposal.StateCode.stateCode;
						sanctionHeadMasterData.StateCode=stateCodeData;
						sanctionHeadMasterData.sanctionedAmount = $('.ihhl1AmountApproved').val();
						sanctionHeadMasterData.expenseHead= val.heads;
						sanctionHeadMasterData.proposalHeadId=val.Id;
						sanctionHeadMasterData.financialYear=val.financialYear;
						sanctionHeadMasterList.push(sanctionHeadMasterData);
					}else if(val.heads == "IHHL Installment2"){
						var sanctionHeadMasterData= new Object();
						var stateCodeData= new Object();
						stateCodeData.stateCode=editProposal.StateCode.stateCode;
						sanctionHeadMasterData.StateCode=stateCodeData;
						sanctionHeadMasterData.sanctionedAmount = $('.ihhl2AmountApproved').val();
						sanctionHeadMasterData.expenseHead= val.heads;
						sanctionHeadMasterData.proposalHeadId=val.Id;
						sanctionHeadMasterData.financialYear=val.financialYear;
						sanctionHeadMasterList.push(sanctionHeadMasterData);
					}else if(val.heads == "CT/PT"){
						var sanctionHeadMasterData= new Object();
						var stateCodeData= new Object();
						stateCodeData.stateCode=editProposal.StateCode.stateCode;
						sanctionHeadMasterData.StateCode=stateCodeData;
						sanctionHeadMasterData.sanctionedAmount = $('.ctptAmountApproved').val();
						sanctionHeadMasterData.expenseHead= val.heads;
						sanctionHeadMasterData.proposalHeadId=val.Id;
						sanctionHeadMasterData.financialYear=val.financialYear;
						sanctionHeadMasterList.push(sanctionHeadMasterData);
					}else if(val.heads == "SWM"){
						var sanctionHeadMasterData= new Object();
						var stateCodeData= new Object();
						stateCodeData.stateCode=editProposal.StateCode.stateCode;
						sanctionHeadMasterData.StateCode=stateCodeData;
						sanctionHeadMasterData.sanctionedAmount = $('.swmAmountApproved').val();
						sanctionHeadMasterData.expenseHead= val.heads;
						sanctionHeadMasterData.proposalHeadId=val.Id;
						sanctionHeadMasterData.financialYear=val.financialYear;
						sanctionHeadMasterList.push(sanctionHeadMasterData);
					}else if(val.heads == "IEC"){
						var sanctionHeadMasterData= new Object();
						var stateCodeData= new Object();
						stateCodeData.stateCode=editProposal.StateCode.stateCode;
						sanctionHeadMasterData.StateCode=stateCodeData;
						sanctionHeadMasterData.sanctionedAmount = $('.iecAmountApproved').val();
						sanctionHeadMasterData.expenseHead= val.heads;
						sanctionHeadMasterData.proposalHeadId=val.Id;
						sanctionHeadMasterData.financialYear=val.financialYear;
						sanctionHeadMasterList.push(sanctionHeadMasterData);
					}else if(val.heads == "CB&AOE"){
						var sanctionHeadMasterData= new Object();
						var stateCodeData= new Object();
						stateCodeData.stateCode=editProposal.StateCode.stateCode;
						sanctionHeadMasterData.StateCode=stateCodeData;
						sanctionHeadMasterData.sanctionedAmount = $('.cbAoeAmountApproved').val();
						sanctionHeadMasterData.expenseHead= val.heads;
						sanctionHeadMasterData.proposalHeadId=val.Id;
						sanctionHeadMasterData.financialYear=val.financialYear;
						sanctionHeadMasterList.push(sanctionHeadMasterData);	
					}
					
					
				});
				var stateCodeData= new Object();
				stateCodeData.stateCode=stateCode;
				sanctionMaster.StateCode=stateCodeData;
				sanctionMaster.sanctionHeadMaters=sanctionHeadMasterList;
				sanctionMaster.totalSanctionedAmount=$('.sanApproveAmount').val();
				sanctionMaster.proposalName=editProposal.proposalName;
				sanctionMaster.proposalId=editProposal.Id;
				var sanLetter=$("#sanctionUpload")[0].files[0];
				var formData = new FormData();
				if(sanLetter == undefined){
					formData.append('proposalStatus',"SHCP-Approved" );
				}else{
					formData.append('proposalStatus',"Center-Approved" );
				}
				formData.append('sanctionLetter',sanLetter );
				formData.append('sanctionMaster',JSON.stringify(sanctionMaster));
				formData.append('proposalMaster',JSON.stringify(editProposal));
				console.log(sanctionMaster)
				$.ajax({
					url:"/SBMFundRequisition/fund/create/saveSanctionByState",
					type:"POST",
					headers: headerData,
					data : formData,
					enctype:"multipart/form-data",
					dataType : 'json',
				    processData: false,  // tell jQuery not to process the data
				    contentType: false,
					success: function(data) {
						console.log(data);
						$('#myModalSenction').modal('hide');
						viewSanctionProposals(data);
					}
				});
				
			});
			
			//reject Sanction
			$('.rejectSanction').on('click',function(){
				
				var proposalMasterData = new Object();
				proposalMasterData= editProposal;
				proposalMasterData.status="Returned-by-Centre"
					proposalMasterData.approverRemarks= $('.sanRemarks').val();	
				
				$.ajax({
					url:"/SBMFundRequisition/fund/create/rejectProposalByState",
					type:"POST",
					headers: headerData,
					data : JSON.stringify(proposalMasterData),
					//enctype:"multipart/form-data",
					dataType : 'json',
					contentType: "application/json",
					success: function(data) {
						console.log(data);
						$('#myModalSenction').modal('hide');
						viewSanctionProposals(data);
					}
				});
				
			
			})
		},
		utilizationByState:function(){
			$('.ihhl1utilization').on('click',function(){
				$('#utilExpenseHead').val('IHHL Installment1');
				$('#FundUtilization').show();
				$('.utilConstructedNodiv').show();
				$('.utilCommencedNoDiv').show();
				$('.utilPhotoCommencedNoDiv').show();
				$('.utilPhotoCommencedNoDiv').show();
				
			});
			
			$('.ihhl2utilization').on('click',function(){
				$('#FundUtilization').show();
				$('#utilExpenseHead').val('IHHL Installment2');
				$('.utilConstructedNodiv').show();
				$('.utilCommencedNoDiv').show();
				$('.utilPhotoCommencedNoDiv').show();
				$('.utilPhotoCommencedNoDiv').show();
			});
			$('.ctptutilization').on('click',function(){
				$('#FundUtilization').show();
				$('#utilExpenseHead').val('CT/PT');
				$('.utilConstructedNodiv').hide();
				$('.utilCommencedNoDiv').hide();
				$('.utilPhotoCommencedNoDiv').hide();
				$('.utilPhotoCommencedNoDiv').hide();
			});
			$('.swmutilization').on('click',function(){
				$('#FundUtilization').show();
				$('#utilExpenseHead').val('SWM Installment1');
				$('.utilConstructedNodiv').hide();
				$('.utilCommencedNoDiv').hide();
				$('.utilPhotoCommencedNoDiv').hide();
				$('.utilPhotoCommencedNoDiv').hide();
			});
			$('.swm2utilization').on('click',function(){
				$('#FundUtilization').show();
				$('#utilExpenseHead').val('SWM Installment2');
				$('.utilConstructedNodiv').hide();
				$('.utilCommencedNoDiv').hide();
				$('.utilPhotoCommencedNoDiv').hide();
				$('.utilPhotoCommencedNoDiv').hide();
			});
			$('.iecutilization').on('click',function(){
				$('#FundUtilization').show();
				$('#utilExpenseHead').val('IEC');
				$('.utilConstructedNodiv').hide();
				$('.utilCommencedNoDiv').hide();
				$('.utilPhotoCommencedNoDiv').hide();
				$('.utilPhotoCommencedNoDiv').hide();
			});
			$('.cbAoeutilization').on('click',function(){
				$('#FundUtilization').show();
				$('#utilExpenseHead').val('CB&AOE');
				$('.utilConstructedNodiv').hide();
				$('.utilCommencedNoDiv').hide();
				$('.utilPhotoCommencedNoDiv').hide();
				$('.utilPhotoCommencedNoDiv').hide();
			});
			
			$('.saveUtilization').on('click',function(){
				var stateUtilizationData= new Object();
				var stateCodeData= new Object();
				stateCodeData.stateCode=stateCode;
				stateUtilizationData.StateCode=stateCodeData;
				stateUtilizationData.expenseHead= $('#utilExpenseHead').val();
				stateUtilizationData.financialYear=$('#utilFinancialYear').val();
				stateUtilizationData.utilizationAmount =$('.utilizationAmount').val();
				stateUtilizationData.utilizationReferenceNo=$('.utilUcRefNo').val();
				stateUtilizationData.remarks =$('.utilRemarks').val();
				stateUtilizationData.workCompleted=$('.utilWorkCompleted').val();
				if(($('#utilExpenseHead').val() == "IHHL Installment1")||($('#utilExpenseHead').val() == "IHHL Installment2")){
					stateUtilizationData.constructedNumbers =$('.utilConstructedNo').val();
					stateUtilizationData.commencedNumbers =$('.utilCommencedNo').val();
					stateUtilizationData.noOfPhotographCommenced = $('.utilPhotoCommencedNo').val();
					stateUtilizationData.noOfPhotographCompleted = $('.utilPhotoCompleteNo').val();
				}
				var utilUCcertificate=$("#utilUcCertificate")[0].files[0];
				var utilPhotoGraph=$("#utilUcCertificate")[0].files[0];
				var formData = new FormData();
				
				formData.append('ucCertificate',utilUCcertificate );
				formData.append('photograps',utilPhotoGraph );
				formData.append('utilizationMaster',JSON.stringify(stateUtilizationData));
				
				$.ajax({
					url:"/SBMFundRequisition/fund/create/saveUitlization",
					type:"POST",
					headers: headerData,
					data : formData,
					enctype:"multipart/form-data",
					dataType : 'json',
				    processData: false,  // tell jQuery not to process the data
				    contentType: false,
					success: function(data) {
						console.log(data);
						$('#FundUtilization').hide();
						if(data.data.expenseHead == "IHHL Installment1"){
							$('.iHHL1ProposedUtilizedFunds').val(data.data.utilizationAmount);
							$('.iHHL1TotalUtilization').val(data.data.utilizationAmountTillDate);
						}else if(data.data.expenseHead == "IHHL Installment2"){
							$('.iHHL2ProposedUtilizedFunds').val(data.data.utilizationAmount);
							$('.iHHL2TotalUtilization').val(data.data.utilizationAmountTillDate);
						}else if(data.data.expenseHead == "CT/PT"){
							$('.cTPTProposedUtilizedFunds').val(data.data.utilizationAmount);
							$('.ctptTotalUtilization').val(data.data.utilizationAmountTillDate);
						}else if(data.data.expenseHead == "SWM Installment1"){
							$('.swmProposedUtilizedFunds').val(data.data.utilizationAmount);
							$('.swmTotalUtilization').val(data.data.utilizationAmountTillDate);
						}else if(data.data.expenseHead == "SWM Installment2"){
							$('.swm2ProposedUtilizedFunds').val(data.data.utilizationAmount);
							$('.swm2TotalUtilization').val(data.data.utilizationAmountTillDate);
						}else if(data.data.expenseHead == "IEC"){
							$('.iecProposedUtilizedFunds').val(data.data.utilizationAmount);
							$('.iecTotalUtilization').val(data.data.utilizationAmountTillDate);
						}else if(data.data.expenseHead == "CB&AOE"){
							$('.cbAoeProposedUtilizedFunds').val(data.data.utilizationAmount);
							$('.cbAoeTotalUtilization').val(data.data.utilizationAmountTillDate);
						}
						
					}
				});
			});
			
			$('.utilCancel').on('click',function(){
				$('#FundUtilization').hide();
			});
		}
}
function loadPropsalDetails(stateDetails){
	$.ajax({
		url:"/SBMFundRequisition/fund/read/getSanctionDetailsByState",
		type:"POST",
		headers: headerData,
		dataType:'json',
		data:JSON.stringify(stateDetails),
		contentType:"application/json",
		success:function(data){
			console.log(data);
			$.each(data.sanctionHeadMaters,function(key,val){
				if(val.expenseHead == "IHHL Installment1"){
					//$('.sanihhl1ProposalHead').val(val.heads);
					$('.iHHL1TSAmount').val(val.totalSanctionAmountPerHead);
					$('.iHHL1LastSanAmount').val(val.sanctionedAmount);
					
				}else if(val.expenseHead == "IHHL Installment2"){
					$('.iHHL2TSAmount').val(val.totalSanctionAmountPerHead);
					$('.iHHL2LastSanAmount').val(val.sanctionedAmount);
					
				}else if(val.expenseHead == "CT/PT"){
					$('.ctptTSAmount').val(val.totalSanctionAmountPerHead);
					$('.ctptLastSanAmount').val(val.sanctionedAmount);
					
				}else if(val.expenseHead == "SWM"){
					$('.swmTSAmount').val(val.totalSanctionAmountPerHead);
					$('.swmLastSanAmount').val(val.sanctionedAmount);
					
				}else if(val.expenseHead == "IEC"){
					$('.iecTSAmount').val(val.totalSanctionAmountPerHead);
					$('.iecLastSanAmount').val(val.sanctionedAmount);
				}else if(val.expenseHead == "CB&AOE"){
					$('.cbAoeTSAmount').val(val.totalSanctionAmountPerHead);
					$('.cbAoeLastSanAmount').val(val.sanctionedAmount);
					
				}
			});
		}
	});
	$.ajax({
		url:"/SBMFundRequisition/fund/read/getUtilisationByState",
		type:"POST",
		dataType:'json',
		headers: headerData,
		contentType:"application/json",
		data:JSON.stringify(stateDetails),
		success:function(data){
			$.each(data.stateUtilizationHeadMasters, function(key,val){
				if(val.expenseHead == "IHHL Installment1"){
					//$('.sanihhl1ProposalHead').val(val.heads);
					$('.iHHL1ProposedUtilizedFunds').val(val.utilizationAmount);
					$('.iHHL1TotalUtilization').val(val.utilizationAmountTillDate);
					
				}else if(val.expenseHead == "IHHL Installment2"){
					$('.iHHL2TSAmount').val(val.utilizationAmount);
					$('.iHHL2ProposedUtilizedFunds').val(val.utilizationAmountTillDate);
					
				}else if(val.expenseHead == "CT/PT"){
					$('.ctptTotalUtilization').val(val.utilizationAmount);
					$('.cTPTProposedUtilizedFunds').val(val.utilizationAmountTillDate);
					
				}else if(val.expenseHead == "SWM"){
					$('.swmTotalUtilization').val(val.utilizationAmount);
					$('.swmProposedUtilizedFunds').val(val.utilizationAmountTillDate);
					
				}else if(val.expenseHead == "IEC"){
					$('.iecTotalUtilization').val(val.utilizationAmount);
					$('.iecProposedUtilizedFunds').val(val.utilizationAmountTillDate);
				}else if(val.expenseHead == "CB&AOE"){
					$('.cbAoeTotalUtilization').val(val.utilizationAmount);
					$('.cbAoeProposedUtilizedFunds').val(val.utilizationAmountTillDate);
					
				}
				
			});
			
		}
	});
	$.ajax({
		url:"/SBMFundRequisition/fund/read/getTotalTargetByState",
		type:"POST",
		dataType:'json',
		headers: headerData,
		contentType:"application/json",
		data:JSON.stringify(stateDetails),
		success:function(data){
			console.log(data.data)
			$.each(data.data,function(key,val){
				if(key == 0){
					$('.iHHL1TotalTarget').val(val.totalIHHTsRequiredbyState);
					$('.iHHL2TotalTarget').val(val.totalIHHTsRequiredbyState);
					$('.ctptTotalTarget').val(val.totalCTRequired);
					$('.ihhl1targetAmount').html(val.totalIHHTsRequiredbyState);
					$('.ihhl2targetAmount').html(val.totalIHHTsRequiredbyState);
					$('.ctpttargetAmount').html(val.totalCTRequired);
				}else{
					if(val.heads == "IHHL Installment1"){
						//$('.sanihhl1ProposalHead').val(val.heads);
						$('.iHHL1tpAoumnt').val(val.totalTargetFunds);
						$('.ihhl1fundAllocation').html(val.totalTargetFunds);
						
					}else if(val.heads == "IHHL Installment2"){
						$('.iHHL2tpAoumnt').val(val.totalTargetFunds);
						$('.ihhl2fundAllocation').html(val.totalTargetFunds);
						
					}else if(val.heads == "CT/PT"){
						$('.cTPTtpAoumnt').val(val.totalTargetFunds);
						$('.ctptfundAllocation').html(val.totalTargetFunds);
						
					}else if(val.heads == "SWM"){
						$('.swmtpAoumnt').val(val.totalTargetFunds);
						$('.swmfundAllocation').html(val.totalTargetFunds);
						
					}else if(val.heads == "IEC"){
						$('.iectpAoumnt').val(val.totalTargetFunds);
						$('.iecfundAllocation').html(val.totalTargetFunds);
					}else if(val.heads == "CB&AOE"){
						$('.cbAoetpAoumnt').val(val.totalTargetFunds);
						$('.cbAoefundAllocation').html(val.totalTargetFunds);
					}
				}
			});
		}
	});
}
function getProposalsByStateTable(data){

	/*$('#driveDataTable tbody').html('');
	$('#driveDataTable').html('');*/
	$('.proposalTableview').html("<div class=\"table-responsive\"><table id=\"proposalDataTable\" class=\"table\">" +
			"<colgroup>	<col class=\"col-xs-2\">	<col class=\"col-xs-2\"> <col class=\"col-xs-2\">	<col class=\"col-xs-2\">	<col class=\"col-xs-2\"> <col class=\"col-xs-2\">" +
			"<col class=\"col-xs-1\"></colgroup><thead>	<tr><th>Proposal Ref. No</th><th>Proposal Create Date</th><th>Financial Year</th>" +
			"<th>Proposal Amount</th><th>Total Approved Cost</th>	<th>Status</th><th class=\"text-right\">Edit/View</th>	</tr></thead><tbody></tbody></table></div>");
	
	$.each(data,function(key,val){
		var date = new Date(val.createdAt);
		if(val.status == "Saved" || val.status == "Created" || val.status == "Returned-by-Centre" || val.status == "Withdraw" ){
			$('#proposalDataTable tbody').append("<tr role=\"row\" id='"+val.Id+"'> " +
					" <td><a href='#' class='proposalIdView' data-toggle=\"modal\" data-target=\"#myModal\">"+val.Id+"</a></td> <td>"+date.toDateString()+"</td> <td>"+val.financialYear+"</td><td>"+val.totalAmount+"</td><td>"+val.approvedAmount+"</td><td>"+val.status+"</td> " +
					" <td class=\"text-right\"><button class=\"btn btn-warning btn-rounded editProposal\"  data-toggle=\"modal\" "+
							"	data-target=\"#myModal\" >	<i class=\"glyphicon glyphicon-pencil\"></i>"+
					"</button> </td>     </tr>");
		}else{
			$('#proposalDataTable tbody').append("<tr role=\"row\" id='"+val.Id+"'> " +
					" <td><a href='#'  class='proposalIdView'  data-toggle=\"modal\" data-target=\"#myModal\">"+val.Id+"</a></td> <td>"+date.toDateString()+"</td> <td>"+val.financialYear+"</td><td>"+val.totalAmount+"</td><td>"+val.approvedAmount+"</td><td>"+val.status+"</td> " +
					" <td class=\"text-right\"><button class=\"btn btn-success btn-rounded viewProposal\" data-toggle=\"modal\" "+
							"	data-target=\"#myModal\" >	<i class=\"glyphicon glyphicon-eye-open\"></i>" +
					"</button>  </td>     </tr>");
		}
		//$('#proposalDataTable').trigger('sortReset');
		
	});
	var dataTable=	$('#proposalDataTable').DataTable({
        aaSorting: [[0, 'desc']],
        bPaginate: false,
        bFilter: true,
        bInfo: false,
        "aoColumnDefs": [ { "bSortable": false, "aTargets": [6] }],
        bSortable: true,
        bRetrieve: true,
        colReorder: true

	  });
}
function viewSanctionProposals(data){


	/*$('#driveDataTable tbody').html('');
	$('#driveDataTable').html('');*/
	$('.proposalTableview').html("<div class=\"table-responsive\"><table id=\"proposalDataTable\" class=\"table\">" +
			"<colgroup>	<col class=\"col-xs-2\">	<col class=\"col-xs-2\"> <col class=\"col-xs-2\">	<col class=\"col-xs-2\"> <col class=\"col-xs-2\">	<col class=\"col-xs-2\">" +
			"<col class=\"col-xs-1\"></colgroup><thead>	<tr><th>Proposal Ref. No</th>	<th>Proposal Create Date</th><th>Proposal Name</th>	" +
			"<th>Proposal Amount</th>	<th>Total Approved Cost</th><th>Status</th><th class=\"text-right\">Edit/View</th>	</tr></thead><tbody></tbody></table></div>");
	
	$.each(data,function(key,val){
		if(val.status == "Returned-by-Centre" || val.status == "SHPC-Approved"){
			$('#proposalDataTable tbody').append("<tr role=\"row\" id='"+val.Id+"'> " +
					" <td><a href='#'  class='proposalIdView'  data-toggle=\"modal\" data-target=\"#myModal\">"+val.Id+"</a></td> <td>"+val.createdAt+"</td> <td>"+val.financialYear+"</td><td>"+val.totalAmount+"</td><td>"+val.approvedAmount+"</td><td>"+val.status+"</td> " +
					" <td class=\"text-right\"><button class=\"btn btn-warning btn-rounded sanctionProposal\"  data-toggle=\"modal\" "+
							"	data-target=\"#myModalSenction\" >	<i class=\"glyphicon glyphicon-check\"></i>"+
					"</button> </td>     </tr>");
		}else{
			$('#proposalDataTable tbody').append("<tr role=\"row\" id='"+val.Id+"'> " +
					" <td><a href='#'  class='proposalIdView'  data-toggle=\"modal\" data-target=\"#myModal\">"+val.Id+"</a></td> <td>"+val.createdAt+"</td> <td>"+val.financialYear+"</td><td>"+val.totalAmount+"</td><td>"+val.approvedAmount+"</td><td>"+val.status+"</td> " +
					" <td class=\"text-right\"><button class=\"btn btn-success btn-rounded viewProposal\" data-toggle=\"modal\" "+
							"	data-target=\"#myModal\" >	<i class=\"glyphicon glyphicon-eye-open\"></i>" +
					"</button>  </td>     </tr>");
		}
		
	});
	var dataTable=	$('#proposalDataTable').DataTable({
        aaSorting: [[0, 'desc']],
        bPaginate: false,
        bFilter: false,
        bInfo: false,
        "aoColumnDefs": [ { "bSortable": false, "aTargets": [6] }],
        bSortable: true,
        bRetrieve: true,
        colReorder: true

	  });

}