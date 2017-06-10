var headerData = new Object();
var stateDataObj;
var SBMFundRequisitionMasterHandler = {
	init : function(screenId, encData, emailId) {
		$("#citySpan,#ctySpan,#ttfSpan,#upSpan,#noSpan,#hhdSpan,#hpitSpan,#swSpan,#hhisSpan,#mswSpan,#msw1Span,#msw2Span,#censeSpan,#openSpan,#pitSpan,#lfinSpan,#ihhlSSpan,#ctSpan,#ptSpan,#fySpan,#csaSpan").hide();
		headerData.Authorization = encData;
		headerData.emailId = emailId;
		SBMFundRequisitionMasterHandler.saveUrbanSanitationData();
		SBMFundRequisitionMasterHandler.editUrbanSanitationData();
		SBMFundRequisitionMasterHandler.saveSanitationFinancialYearData();
		SBMFundRequisitionMasterHandler.editUrbanFinancialYearData();
		SBMFundRequisitionMasterHandler.saveStateTargetData();
		SBMFundRequisitionMasterHandler.editStateTargetData();
		SBMFundRequisitionMasterHandler.getCityData();
		SBMFundRequisitionMasterHandler.saveMasterSanitationData();
		SBMFundRequisitionMasterHandler.editMasterSanitationData();
		SBMFundRequisitionMasterHandler.getMasterSanitationData();
		SBMFundRequisitionMasterHandler.validateFormData();
		SBMFundRequisitionMasterHandler.saveSanctionData();
		SBMFundRequisitionMasterHandler.getSanctionData();
		SBMFundRequisitionMasterHandler.saveStateUtilizationData();
		SBMFundRequisitionMasterHandler.getStateUtilizationData();

		$.ajax({
			url : "/SBMFundRequisition/fund/read/getStatesList",
			type : "POST",
			headers : headerData,
			dataType : 'json',
			contentType : "application/json",
			success : function(data) {

				stateDataObj = data;
				var optionData = '';
				$.each(data.obj, function(key, val) {
					var options = "<option value='" + val.stateCode + "'>"
							+ val.stateName + "</option>";
					optionData += options;
				});
				$("#state_codes option").remove();
				$("#fin_year_state_codes option").remove();
				$("#stateTar_state_codes option").remove();
				$("#mstr_sani_state_codes option").remove();

				$("#state_codes").append(optionData);
				$("#fin_year_state_codes").append(optionData);
				$("#stateTar_state_codes").append(optionData);
				$("#mstr_sani_state_codes").append(optionData);

			},
			error : function(data) {
				console.log(data);
			}
		});

		if (screenId == 1) {
			$(".urbanSanitation").show();
			$(".urbanfinancialYear,.stateFinancialTarget,.mtrSanitation,.mtrSanction,.stateUtilMasSection").hide();
			$.ajax({
				url : "/SBMFundRequisition/fund/read/getCitySanitations",
				type : "POST",
				headers : headerData,
				dataType : 'json',
				contentType : "application/json",
				success : function(data) {
					SBMFundRequisitionMasterHandler
							.getUrbanSanitationData(data);
				},
				error : function(data) {
					console.log(data);
				}
			});
		} else if (screenId == 2) {
			$(".urbanfinancialYear").show();
			$(".urbanSanitation,.stateFinancialTarget,.mtrSanitation,.mtrSanction,.stateUtilMasSection").hide();
			$
					.ajax({
						url : "/SBMFundRequisition/fund/read/getCitySanitationsFinYear",
						type : "POST",
						headers : headerData,
						dataType : 'json',
						contentType : "application/json",
						success : function(data) {
							SBMFundRequisitionMasterHandler
									.getFinancialYearData(data);
						},
						error : function(data) {
							console.log(data);
						}
					});

		} else if (screenId == 3) {
			$(".stateFinancialTarget").show();
			$(".urbanSanitation,.urbanfinancialYear,.mtrSanitation,.mtrSanction,.stateUtilMasSection").hide();

			$.ajax({
				url : "/SBMFundRequisition/fund/read/getStateFinTarget",
				type : "POST",
				headers : headerData,
				dataType : 'json',
				contentType : "application/json",
				success : function(data) {
					SBMFundRequisitionMasterHandler
							.getStateFinancialTargetData(data);
				},
				error : function(data) {
					console.log(data);
				}
			});
		} else if (screenId == 4) {
			$(".mtrSanitation").show();
			$(".urbanSanitation,.urbanfinancialYear,.stateFinancialTarget,.mtrSanction,.stateUtilMasSection").hide();

			$.ajax({
				url : "/SBMFundRequisition/fund/read/getIhhlShareAmt",
				type : "POST",
				headers : headerData,
				dataType : 'json',
				contentType : "application/json",
				success : function(data) {
					SBMFundRequisitionMasterHandler
							.getMasterSanitationData(data);
				},
				error : function(data) {
					console.log(data);
				}
			});
		} else if (screenId == 5) {
			$(".mtrSanction").show();
			$(".urbanSanitation,.urbanfinancialYear,.stateFinancialTarget,.mtrSanitation,.stateUtilMasSection").hide();

			$.ajax({
				url : "/SBMFundRequisition/fund/read/getSancationData",
				type : "POST",
				headers : headerData,
				dataType : 'json',
				contentType : "application/json",
				success : function(data) {
					SBMFundRequisitionMasterHandler
							.getSanctionData(data);
				},
				error : function(data) {
					console.log(data);
				}
			});
		}else if (screenId == 6) {
			$(".stateUtilMasSection").show();
			$(".urbanSanitation,.urbanfinancialYear,.stateFinancialTarget,.mtrSanitation,.mtrSanction").hide();

			$.ajax({
				url : "/SBMFundRequisition/fund/read/getStateUtilizationData",
				type : "POST",
				headers : headerData,
				dataType : 'json',
				contentType : "application/json",
				success : function(data) {
					SBMFundRequisitionMasterHandler
							.getStateUtilizationData(data);
				},
				error : function(data) {
					console.log(data);
				}
			});
		}

		$("#urbanSaniRef").click(function() {
							$(".urbanSanitation").show();
							$(".urbanfinancialYear,.stateFinancialTarget,.mtrSanitation,.mtrSanction,.stateUtilMasSection")
									.hide();
							$
									.ajax({
										url : "/SBMFundRequisition/fund/read/getCitySanitations",
										type : "POST",
										headers : headerData,
										dataType : 'json',
										contentType : "application/json",
										success : function(data) {
											SBMFundRequisitionMasterHandler
													.getUrbanSanitationData(data);
										},
										error : function(data) {
											console.log(data);
										}
									});
						});
		$("#finYearRef").click(function() {
							$(".urbanfinancialYear").show();
							$(".urbanSanitation,.stateFinancialTarget,.mtrSanitation,.mtrSanction,.stateUtilMasSection").hide();
							$
									.ajax({
										url : "/SBMFundRequisition/fund/read/getCitySanitationsFinYear",
										type : "POST",
										headers : headerData,
										dataType : 'json',
										contentType : "application/json",
										success : function(data) {
											SBMFundRequisitionMasterHandler
													.getFinancialYearData(data);
										},
										error : function(data) {
											console.log(data);
										}
									});
						});

		$("#stateFinTarRef").click(function() {
							$(".stateFinancialTarget").show();
							$(".urbanSanitation,.urbanfinancialYear,.mtrSanitation,.mtrSanction,.stateUtilMasSection").hide();

							$
									.ajax({
										url : "/SBMFundRequisition/fund/read/getStateFinTarget",
										type : "POST",
										headers : headerData,
										dataType : 'json',
										contentType : "application/json",
										success : function(data) {
											SBMFundRequisitionMasterHandler
													.getStateFinancialTargetData(data);
										},
										error : function(data) {
											console.log(data);
										}
									});
						});
		
		$("#mstrSanitation").click(function() {
					$(".mtrSanitation").show();
					$(".urbanSanitation,.urbanfinancialYear,.stateFinancialTarget,.mtrSanction,.stateUtilMasSection").hide();

					$
							.ajax({
								url : "/SBMFundRequisition/fund/read/getIhhlShareAmt",
								type : "POST",
								headers : headerData,
								dataType : 'json',
								contentType : "application/json",
								success : function(data) {
									SBMFundRequisitionMasterHandler
											.getMasterSanitationData(data);
								},
								error : function(data) {
									console.log(data);
								}
							});
				});
		
		$("#sanctionMastr").click(function() {
			$(".mtrSanction").show();
			$(".urbanSanitation,.urbanfinancialYear,.stateFinancialTarget,.mtrSanitation,.stateUtilMasSection").hide();

			$.ajax({
				url : "/SBMFundRequisition/fund/read/getSancationData",
				type : "POST",
				headers : headerData,
				dataType : 'json',
				contentType : "application/json",
				success : function(data) {
					SBMFundRequisitionMasterHandler
							.getSanctionData(data);
				},
				error : function(data) {
					console.log(data);
				}
			});
		});
		
		$("#stateUtilMaster").click(function() {
			$(".stateUtilMasSection").show();
			$(".urbanSanitation,.urbanfinancialYear,.stateFinancialTarget,.mtrSanitation,.mtrSanction").hide();

			$.ajax({
				url : "/SBMFundRequisition/fund/read/getStateUtilizationData",
				type : "POST",
				headers : headerData,
				dataType : 'json',
				contentType : "application/json",
				success : function(data) {
					SBMFundRequisitionMasterHandler
							.getStateUtilizationData(data);
				},
				error : function(data) {
					console.log(data);
				}
			});
		});
	},
	saveUrbanSanitationData : function() {

		$(document).on("click","#urbanSanitationSave",function() {
			var zero = $("#city_codes").val();
			var one = $("#urbanPopulation").val();
			var two = $("#noOfUrbanHouseHolds").val();
			var three = $("#urbanHHDefecatingOpen").val();
			var four = $("#urbanHHshavingPitLaterines").val();
			var five = $("#UrbanHHswithInsanitaryLaterines").val();
			var six = $("#solidWasteGenerated").val();
			var seven = $("#MSWCollected").val();
			var eight = $("#mswTransported").val();
			var nine = $("#mswTreated").val();
			var ten = $("#censusYear").val();
			
			
			if(zero == null || zero == ""){
				$("#ctySpan").show();
				$("#ctySpan").delay(2000).fadeOut('slow');	
			}else if(one == ""){
				$("#upSpan").show();
				$("#upSpan").delay(2000).fadeOut('slow');	
			}else if(two == ""){
				$("#noSpan").show();
				$("#noSpan").delay(2000).fadeOut('slow');	
			}else if(three == ""){
				$("#hhdSpan").show();
				$("#hhdSpan").delay(2000).fadeOut('slow');	
			}else if(four == ""){
				$("#hpitSpan").show();
				$("#hpitSpan").delay(2000).fadeOut('slow');	
			}else if(five == ""){
				$("#hhisSpan").show();
				$("#hhisSpan").delay(2000).fadeOut('slow');	
			}else if(six == ""){
				$("#swSpan").show();
				$("#swSpan").delay(2000).fadeOut('slow');	
			}else if(seven == ""){
				$("#mswSpan").show();
				$("#mswSpan").delay(2000).fadeOut('slow');	
			}else if(eight == ""){
				$("#msw1Span").show();
				$("#msw1Span").delay(2000).fadeOut('slow');	
			}else if(nine == ""){
				$("#msw2Span").show();
				$("#msw2Span").delay(2000).fadeOut('slow');	
			}else if(ten == ""){
				$("#censeSpan").show();
				$("#censeSpan").delay(2000).fadeOut('slow');	
			}else{
			
							var CitySanitationMaster = new Object();
							if ($("#urbanId").val() != "") {

								var stateObj = new Object();
								stateObj.stateCode = $("#state_codes").val();
								var ulbObj = new Object();
								ulbObj.ulbCode = $("#city_codes").val();
								CitySanitationMaster.id = $("#urbanId").val();
								CitySanitationMaster.StateCode = stateObj;
								CitySanitationMaster.ulbCodes = ulbObj;
								CitySanitationMaster.urbanPopulation = one;
								CitySanitationMaster.noOfUrbanHouseHolds = two;
								CitySanitationMaster.urbanHHDefecatingOpen = three;
								CitySanitationMaster.urbanHHshavingPitLaterines = four;
								CitySanitationMaster.UrbanHHswithInsanitaryLaterines = five;
								CitySanitationMaster.solidWasteGenerated = six;
								CitySanitationMaster.MSWCollected = seven;
								CitySanitationMaster.mswTransported = eight;
								CitySanitationMaster.mswTreated = nine;
								CitySanitationMaster.censusYear = ten;
							} else {

								var stateObj = new Object();
								stateObj.stateCode = $("#state_codes").val();
								var ulbObj = new Object();
								ulbObj.ulbCode = $("#city_codes").val();
								CitySanitationMaster.StateCode = stateObj;
								CitySanitationMaster.ulbCodes = ulbObj;
								CitySanitationMaster.urbanPopulation = one;
								CitySanitationMaster.noOfUrbanHouseHolds = two;
								CitySanitationMaster.urbanHHDefecatingOpen = three;
								CitySanitationMaster.urbanHHshavingPitLaterines = four;
								CitySanitationMaster.UrbanHHswithInsanitaryLaterines = five;
								CitySanitationMaster.solidWasteGenerated = six;
								CitySanitationMaster.MSWCollected = seven;
								CitySanitationMaster.mswTransported = eight;
								CitySanitationMaster.mswTreated = nine;
								CitySanitationMaster.censusYear = ten;
							}

							console.log(CitySanitationMaster);
							$.ajax({
										url : "/SBMFundRequisition/fund/create/saveCitySanitations",
										type : "POST",
										headers : headerData,
										dataType : 'json',
										data : JSON
												.stringify(CitySanitationMaster),
										contentType : "application/json",
										success : function(data) {
											$('#infoPopup .modal-body .row')
													.html(
															"<p> Saved Successfully</p>")
											$('#infoPopup').modal();
											SBMFundRequisitionMasterHandler
													.getUrbanSanitationData(data);
										},
										error : function(data) {
											console.log(data);
										}
									});
							$('#urbanSanitationModal').modal('toggle');
			}
						});

		$("#urbanSanitationUploadSave").click(function() {
							var file = $("#urbanSanitationFile")[0].files[0];
							var formData = new FormData();
							formData.append('file', file);
							$.ajax({
										url : "/SBMFundRequisition/fund/create/uploadCitySanitations",
										type : "POST",
										data : formData,
										headers : headerData,
										enctype : "multipart/form-data",
										dataType : 'json',
										processData : false, // tell jQuery
										// not to
										// process the
										// data
										contentType : false,
										success : function(data) {
											$('#infoPopup .modal-body .row')
													.html(
															"<p> Saved Successfully</p>")
											$('#infoPopup').modal();
											SBMFundRequisitionMasterHandler
													.getUrbanSanitationData(data);
										},
										error : function(data) {
											console.log(data);
										}
									});
						});

	},
	editUrbanSanitationData : function() {
		$(document).on("click","#editUrbanSanitation",function(e) {

							$("#urbanId").val($(this).closest("tr").attr("id"));
							$(this).closest("tr").each(function(i, el) {

												var $tds = $(this).find('td');

												stateId = $tds.eq(0)[0].id;
												cityName = $tds.eq(1).text();
												var cityId = $tds.eq(1)[0].id;
												var optionData = '';
												$.each(stateDataObj.obj,function(key,val) {
																	if (stateId == val.stateCode) {
																		var options = "<option selected value='"
																				+ val.stateCode
																				+ "'>"
																				+ val.stateName
																				+ "</option>";
																		optionData += options;
																	} else {
																		var options = "<option value='"
																				+ val.stateCode
																				+ "'>"
																				+ val.stateName
																				+ "</option>";
																		optionData += options;
																	}

																});

												$.ajax({
															url : "/SBMFundRequisition/fund/read/getCityListByState/"+ stateId,
															type : "POST",
															headers : headerData,
															dataType : 'json',
															contentType : "application/json",
															success : function(data) {

																var optionData = '';
																$.each(data.obj,function(key,val) {
																					if (cityId == val.ulbCode) {
																						var options = "<option selected value='"
																								+ val.ulbCode
																								+ "'>"
																								+ val.ulbName
																								+ "</option>";
																						optionData += options;
																					} else {
																						var options = "<option value='"
																								+ val.ulbCode
																								+ "'>"
																								+ val.ulbName
																								+ "</option>";
																						optionData += options;
																					}

																				});
																$("#city_codes option").remove();

																$("#city_codes").append(optionData);

															},
															error : function(data) {
																console.log(data);
															}
														});

												$("#state_codes option").remove();
												$("#state_codes").append(optionData);

												$("#urbanPopulation").val($tds.eq(2).text());
												$("#noOfUrbanHouseHolds").val($tds.eq(3).text());
												$("#urbanHHDefecatingOpen").val($tds.eq(4).text());
												$("#urbanHHshavingPitLaterines").val($tds.eq(5).text());
												$("#UrbanHHswithInsanitaryLaterines").val($tds.eq(6).text());
												$("#solidWasteGenerated").val($tds.eq(7).text());
												$("#MSWCollected").val($tds.eq(8).text());
												$("#mswTransported").val($tds.eq(9).text());
												$("#mswTreated").val($tds.eq(10).text());
												$("#censusYear").val($tds.eq(11).text());

												// do something with productId,
												// product, Quantity
											});

							console.log(e);

						});

	},
	getUrbanSanitationData : function(data) {
		if(data != undefined){
		var trData = '';
		var usTab = "<div  class='table-responsive'> "
				+ "<table id='urbanSanitationTable' class='table table-striped text-center'> "
				+ "<colgroup> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "</colgroup> "
				+ "<thead> "
				+ "<tr> "
				+ "<th class='text-center'> State </th> "
				+ "<th class='text-center'> City</th> "
				+ "<th class='text-center'> Urban Population </th> "
				+ "<th class='text-center'> No of Urban Households </th> "
				+ "<th class='text-center'> Urban HHs defecating on open </th> "
				+ "<th class='text-center'> Urban HHs having Pit Laterines </th> "
				+ "<th class='text-center'> Urban HHs with Insanitary Laterines </th> "
				+ "<th class='text-center'> Solid Waste Generated </th> "
				+ "<th class='text-center'> MSW Collected </th> "
				+ "<th class='text-center'> MSW Transported </th> "
				+ "<th class='text-center'> MSW Treated </th> "
				+ "<th class='text-center'> Census Year </th> "
				+ "<th class='text-center'> Edit/View </th> " + "</tr> "
				+ "</thead> " + "<tbody id='urbanSanitationTbody'> " +

				"</tbody> " + "</table> " + "</div>";

		$("#urbanSanTab").html(usTab);
		$.each(data.obj,function(key, val) {

							var tr = "<tr id='"
									+ val.id
									+ "'><td id='"
									+ val.StateCode.stateCode
									+ "'>"
									+ val.StateCode.stateName
									+ "</td>"
									+ "<td id='"
									+ val.ulbCodes.ulbCode
									+ "'>"
									+ val.ulbCodes.ulbName
									+ "</td>"
									+ "<td>"
									+ val.urbanPopulation
									+ "</td>"
									+ "<td>"
									+ val.noOfUrbanHouseHolds
									+ "</td>"
									+ "<td>"
									+ val.urbanHHDefecatingOpen
									+ "</td>"
									+ "<td>"
									+ val.urbanHHshavingPitLaterines
									+ "</td>"
									+ "<td>"
									+ val.UrbanHHswithInsanitaryLaterines
									+ "</td>"
									+ "<td>"
									+ val.solidWasteGenerated
									+ "</td>"
									+ "<td>"
									+ val.MSWCollected
									+ "</td>"
									+ "<td>"
									+ val.mswTransported
									+ "</td>"
									+ "<td>"
									+ val.mswTreated
									+ "</td>"
									+ "<td>"
									+ val.censusYear
									+ "</td>"
									+ "<td><button class='btn btn-warning btn-rounded' data-toggle='modal' data-target='#urbanSanitationModal' id='editUrbanSanitation'><i class='glyphicon glyphicon-pencil'</i></button></td>"
									+ "</tr>";

							trData += tr;
						});
		$("#urbanSanitationTbody tr").remove();
		$("#urbanSanitationTbody").append(trData);
		var dataTable = $('#urbanSanitationTable').DataTable({
			aaSorting : [ [ 1, 'desc' ] ],
			bPaginate : true,
			bFilter : true,
			bInfo : false,
			"aoColumnDefs" : [ {
				"bSortable" : false,
				"aTargets" : [ 6 ]
			} ],
			bSortable : true,
			bRetrieve : true,
			colReorder : true

		});
	}else{
		console.log("No Records Found")
	}

	},

	saveSanitationFinancialYearData : function() {

		$(document).on("click","#urbanFinYearSave",function() {
			var zero = $("#fin_year_city_codes").val();
			var one = $("#urbanHHsDefecatingonOpen").val();
			var two = $("#urbanHHsHavingPitLaterines").val();
			var three = $("#UrbanHHswithInsanitaryLaterinesFin").val();
			var four = $("#totalIHHTsRequiredbyState").val();
			var five = $("#totalCTRequired").val();
			var six = $("#totalPTRequired").val();
			var seven = $("#financialYear").val();
			if(zero == null || zero == ""){
				$("#citySpan").show();
				$("#citySpan").delay(2000).fadeOut('slow');
			}else if(one == ""){
				$("#openSpan").show();
				$("#openSpan").delay(2000).fadeOut('slow');	
			}else if(two == ""){
				$("#pitSpan").show();
				$("#pitSpan").delay(2000).fadeOut('slow');	
			}else if(three == ""){
				$("#lfinSpan").show();
				$("#lfinSpan").delay(2000).fadeOut('slow');	
			}else if(four == ""){
				$("#ihhlSSpan").show();
				$("#ihhlSSpan").delay(2000).fadeOut('slow');	
			}else if(five == ""){
				$("#ctSpan").show();
				$("#ctSpan").delay(2000).fadeOut('slow');	
			}else if(six == ""){
				$("#ptSpan").show();
				$("#ptSpan").delay(2000).fadeOut('slow');	
			}else if(seven == ""){
				$("#fySpan").show();
				$("#fySpan").delay(2000).fadeOut('slow');	
			}else{
				
			
							var urbanFinancialYearObj = new Object();
							if ($("#finYearId").val() != "") {

								var stateObj = new Object();
								stateObj.stateCode = $("#fin_year_state_codes")
										.val();
								var ulbObj = new Object();
								ulbObj.ulbCode = $("#fin_year_city_codes").val();
								urbanFinancialYearObj.id = $("#finYearId")
										.val();
								urbanFinancialYearObj.StateCode = stateObj;
								urbanFinancialYearObj.ulbCodes = ulbObj;
								urbanFinancialYearObj.urbanHHsDefecatingonOpen = one;
								urbanFinancialYearObj.urbanHHsHavingPitLaterines = two;
								urbanFinancialYearObj.UrbanHHswithInsanitaryLaterines = three;
								urbanFinancialYearObj.totalIHHTsRequiredbyState = four;
								urbanFinancialYearObj.totalCTRequired = five;
								urbanFinancialYearObj.totalPTRequired = six;
								urbanFinancialYearObj.financialYear = seven;

							} else {

								var stateObj = new Object();
								stateObj.stateCode = $("#fin_year_state_codes").val();
								var ulbObj = new Object();
								ulbObj.ulbCode = $("#fin_year_city_codes").val();
								urbanFinancialYearObj.StateCode = stateObj;
								urbanFinancialYearObj.ulbCodes = ulbObj;
								urbanFinancialYearObj.urbanHHsDefecatingonOpen = one;
								urbanFinancialYearObj.urbanHHsHavingPitLaterines = two;
								urbanFinancialYearObj.UrbanHHswithInsanitaryLaterines = three;
								urbanFinancialYearObj.totalIHHTsRequiredbyState = four;
								urbanFinancialYearObj.totalCTRequired = five;
								urbanFinancialYearObj.totalPTRequired = six;
								urbanFinancialYearObj.financialYear = seven;
							}

							console.log(urbanFinancialYearObj);
							$.ajax({
										url : "/SBMFundRequisition/fund/create/saveCitySanitationsFinYear",
										type : "POST",
										headers : headerData,
										dataType : 'json',
										data : JSON
												.stringify(urbanFinancialYearObj),
										contentType : "application/json",
										success : function(data) {
											$('#infoPopup .modal-body .row')
													.html(
															"<p> Saved Successfully</p>")
											$('#infoPopup').modal();
											SBMFundRequisitionMasterHandler
													.getFinancialYearData(data);
										},
										error : function(data) {
											console.log(data);
										}
									});
							$('#financialYearModal').modal('toggle');
			}
						});

		$("#finYearUploadSave").click(function() {
							var file = $("#finYearUploadFile")[0].files[0];
							var formData = new FormData();
							formData.append('file', file);
							$.ajax({
										url : "/SBMFundRequisition/fund/create/uploadCitySanitationsFinYear",
										type : "POST",
										data : formData,
										headers : headerData,
										enctype : "multipart/form-data",
										dataType : 'json',
										processData : false, // tell jQuery
										// not to
										// process the
										// data
										contentType : false,
										success : function(data) {
											$('#infoPopup .modal-body .row')
													.html(
															"<p> Saved Successfully</p>")
											$('#infoPopup').modal();
											SBMFundRequisitionMasterHandler
													.getFinancialYearData(data);
										},
										error : function(data) {
											console.log(data);
										}
									});
						});

	},
	editUrbanFinancialYearData : function() {
		$(document).on("click","#editUrbanFinYear",function(e) {

							$("#finYearId").val($(this).closest("tr").attr("id"));
							$(this).closest("tr").each(function(i, el) {
												var $tds = $(this).find('td');
												stateName = $tds.eq(0).text();
												product = $tds.eq(1).text();

												stateId = $tds.eq(0)[0].id;
												cityName = $tds.eq(1).text();
												var cityId = $tds.eq(1)[0].id;
												var optionData = '';
												$.each(stateDataObj.obj,function(key,val) {
																	if (stateId == val.stateCode) {
																		var options = "<option selected value='"
																				+ val.stateCode
																				+ "'>"
																				+ val.stateName
																				+ "</option>";
																		optionData += options;
																	} else {
																		var options = "<option value='"
																				+ val.stateCode
																				+ "'>"
																				+ val.stateName
																				+ "</option>";
																		optionData += options;
																	}

																});

												$.ajax({
															url : "/SBMFundRequisition/fund/read/getCityListByState/"
																	+ stateId,
															type : "POST",
															headers : headerData,
															dataType : 'json',
															contentType : "application/json",
															success : function(
																	data) {

																var optionData = '';
																$
																		.each(
																				data.obj,
																				function(
																						key,
																						val) {
																					if (cityId == val.ulbCode) {
																						var options = "<option selected value='"
																								+ val.ulbCode
																								+ "'>"
																								+ val.ulbName
																								+ "</option>";
																						optionData += options;
																					} else {
																						var options = "<option value='"
																								+ val.ulbCode
																								+ "'>"
																								+ val.ulbName
																								+ "</option>";
																						optionData += options;
																					}

																				});
																$(
																		"#fin_year_city_codes option")
																		.remove();

																$(
																		"#fin_year_city_codes")
																		.append(
																				optionData);

															},
															error : function(data) {
																console.log(data);
															}
														});

												$("#fin_year_state_codes option").remove();
												$("#fin_year_state_codes").append(optionData);

												$("#urbanHHsDefecatingonOpen").val($tds.eq(2).text());
												$("#urbanHHsHavingPitLaterines").val($tds.eq(3).text());
												$("#UrbanHHswithInsanitaryLaterinesFin").val($tds.eq(4).text());
												$("#totalIHHTsRequiredbyState").val($tds.eq(5).text());
												$("#totalCTRequired").val($tds.eq(6).text());
												$("#totalPTRequired").val($tds.eq(7).text());
												$("#financialYear").val($tds.eq(8).text());

											});

							console.log(e);

						});

	},

	getFinancialYearData : function(data) {
		if(data != undefined){
		var usYearTab = " <div class='table-responsive'> "
				+ " <table  id='urbanSanitationFYTable' class='table table-striped text-center'> "
				+ " <colgroup> "
				+ " <col class='col-xs-2'> "
				+ " <col class='col-xs-2'> "
				+ " <col class='col-xs-2'> "
				+ " <col class='col-xs-2'> "
				+ " <col class='col-xs-2'> "
				+ " <col class='col-xs-2'> "
				+ " <col class='col-xs-2'> "
				+ " <col class='col-xs-2'> "
				+ " <col class='col-xs-2'> "
				+ " </colgroup> "
				+ " <thead> "
				+ " <tr> "
				+ "<th class='text-center'> State </th> "
				+ "<th class='text-center'> City</th> "
				+ " <th class='text-center'> Urban HHs defecating on open </th> "
				+ " <th class='text-center'> Urban HHs having Pit Laterines </th> "
				+ " <th class='text-center'> Urban HHs with Insanitary Laterines </th> "
				+ " <th class='text-center'> Total IHHTs required by state </th> "
				+ " <th class='text-center'> Total CT required </th> "
				+ " <th class='text-center'> Total PT required </th> "
				+ " <th class='text-center'> Financial Year </th> "
				+ " <th class='text-center'> Edit/View </th> " + " </tr> "
				+ " </thead> " + " <tbody id='urbanFinYearTbody'> " +

				" </tbody> " + " </table> " + " </div> ";

		$("#ubFinYearTab").html(usYearTab);
		var trYearData = '';
		$.each(data.obj,function(key, val) {

							var tr = "<tr id='"
									+ val.id
									+ "'><td id='"
									+ val.StateCode.stateCode
									+ "'>"
									+ val.StateCode.stateName
									+ "</td>"
									+ "<td id='"
									+ val.ulbCodes.ulbCode
									+ "'>"
									+ val.ulbCodes.ulbName
									+ "</td>"
									+ "<td>"
									+ val.urbanHHsDefecatingonOpen
									+ "</td>"
									+ "<td>"
									+ val.urbanHHsHavingPitLaterines
									+ "</td>"
									+ "<td>"
									+ val.UrbanHHswithInsanitaryLaterines
									+ "</td>"
									+ "<td>"
									+ val.totalIHHTsRequiredbyState
									+ "</td>"
									+ "<td>"
									+ val.totalCTRequired
									+ "</td>"
									+ "<td>"
									+ val.totalPTRequired
									+ "</td>"
									+ "<td>"
									+ val.financialYear
									+ "</td>"
									+ "<td><button class='btn btn-warning btn-rounded' data-toggle='modal' data-target='#financialYearModal' id='editUrbanFinYear'><i class='glyphicon glyphicon-pencil'</i></button></td>"
									+ "</tr>";

							trYearData += tr;
						});
		$("#urbanFinYearTbody tr").remove();
		$("#urbanFinYearTbody").append(trYearData);
		var dataTable = $('#urbanSanitationFYTable').DataTable({
			aaSorting : [ [ 1, 'desc' ] ],
			bPaginate : true,
			bFilter : true,
			bInfo : false,
			"aoColumnDefs" : [ {
				"bSortable" : false,
				"aTargets" : [ 9 ]
			} ],
			bSortable : true,
			bRetrieve : true,
			colReorder : true

		});
	}else{
		console.log("No Records Found")
	}

	},
	saveStateTargetData : function() {

		$(document).on("click","#stateTargetSave",function() {
			var ttf = $("#totalTargetFunds").val();
				if(ttf != ""){

							var stateTargetObj = new Object();
							if ($("#stateTarId").val() != "") {

								var stateObj = new Object();
								stateObj.stateCode = $("#stateTar_state_codes")
										.val();

								stateTargetObj.id = $("#stateTarId").val();
								stateTargetObj.StateCode = stateObj;

								stateTargetObj.heads = $("#heads").val();
								stateTargetObj.totalTargetFunds = ttf;

							} else {

								var stateObj = new Object();
								stateObj.stateCode = $("#stateTar_state_codes")
										.val();

								stateTargetObj.StateCode = stateObj;

								stateTargetObj.heads = $("#heads").val();
								stateTargetObj.totalTargetFunds = ttf;
							}

							console.log(stateTargetObj);
							$.ajax({
										url : "/SBMFundRequisition/fund/create/saveStateFinTarget",
										type : "POST",
										headers : headerData,
										dataType : 'json',
										data : JSON.stringify(stateTargetObj),
										contentType : "application/json",
										success : function(data) {
											$('#infoPopup .modal-body .row')
													.html(
															"<p> Saved Successfully</p>")
											$('#infoPopup').modal();
											SBMFundRequisitionMasterHandler
													.getStateFinancialTargetData(data);
										},
										error : function(data) {
											console.log(data);
										}
									});
							$('#stateTargetModal').modal('toggle');
				}else{
					$("#ttfSpan").show();
					$("#ttfSpan").delay(2000).fadeOut('slow');
					
				}

						});

		$("#stateTarUploadSave").click(function() {
							var file = $("#stateTargetUploadFile")[0].files[0];
							var formData = new FormData();
							formData.append('file', file);
							$
									.ajax({
										url : "/SBMFundRequisition/fund/create/uploadStateFinTarget",
										type : "POST",
										data : formData,
										headers : headerData,
										enctype : "multipart/form-data",
										dataType : 'json',
										processData : false, // tell jQuery
										// not to
										// process the
										// data
										contentType : false,
										success : function(data) {
											$('#infoPopup .modal-body .row')
													.html(
															"<p> Saved Successfully</p>")
											$('#infoPopup').modal();
											SBMFundRequisitionMasterHandler
													.getStateFinancialTargetData(data);
										},
										error : function(data) {
											console.log(data);
										}
									});
						});

	},
	editStateTargetData : function() {
		$(document).on("click","#editStateFinTarget",function(e) {

							$("#stateTarId").val(
									$(this).closest("tr").attr("id"));
							$(this)
									.closest("tr")
									.each(
											function(i, el) {
												var $tds = $(this).find('td');
												stateId = $tds.eq(0)[0].id;

												var optionData = '';
												$.each(stateDataObj.obj,function(key,val) {
																	if (stateId == val.stateCode) {
																		var options = "<option selected value='"
																				+ val.stateCode
																				+ "'>"
																				+ val.stateName
																				+ "</option>";
																		optionData += options;
																	} else {
																		var options = "<option value='"
																				+ val.stateCode
																				+ "'>"
																				+ val.stateName
																				+ "</option>";
																		optionData += options;
																	}

																});

												$("#stateTar_state_codes option").remove();
												$("#stateTar_state_codes").append(optionData);

												var headsObj = {
													"IHHL Installment2" : "IHHL Installment 2",
													"CT/PT" : "CT/PT",
													"SWM Installment1" : "SWM Installment 1",
													"SWM Installment2" : "SWM Installment 2",
													"IEC" : "IEC",
													"CB&AOE" : "CB & AOE"
												};
												headsKey = $tds.eq(1)[0].textContent;

												var headsData = '';
												$.each(headsObj,function(key,val) {
																	if (key == headsKey) {
																		var options = "<option selected value='"
																				+ key
																				+ "'>"
																				+ val
																				+ "</option>";
																		headsData += options;
																	} else {
																		var options = "<option value='"
																				+ key
																				+ "'>"
																				+ val
																				+ "</option>";
																		headsData += options;
																	}

																});

												$("#heads option").remove();
												$("#heads").append(headsData);

												$("#totalTargetFunds").val($tds.eq(2).text());

											});

							console.log(e);

						});

	},
	getStateFinancialTargetData : function(data) {
		if(data != undefined){
		var stateTarTab = " <div class='table-responsive'> "
				+ " <table  id='stateTargetTable' class='table table-striped text-center'> "
				+ " <colgroup> " + " <col class='col-xs-3'> "
				+ " <col class='col-xs-3'> " + " <col class='col-xs-3'> "
				+ " <col class='col-xs-3'> " + " </colgroup> " + " <thead> "
				+ " <tr> " + "<th class='text-center'> State </th> "
				+ " <th class='text-center'> Heads </th> "
				+ " <th class='text-center'> Total Target Funds </th> "
				+ " <th class='text-center'> Edit/View </th> " + " </tr> "
				+ " </thead> " + " <tbody id='stateTargetTbody'> " +

				" </tbody> " + " </table> " + " </div> ";

		$("#stateTargetTab").html(stateTarTab);
		var stFinTargetData = '';
		$.each(data.obj,function(key, val) {

							var tr = "<tr id='"
									+ val.id
									+ "'><td id='"
									+ val.StateCode.stateCode
									+ "'>"
									+ val.StateCode.stateName
									+ "</td>"
									+ "<td>"
									+ val.heads
									+ "</td>"
									+ "<td>"
									+ val.totalTargetFunds
									+ "</td>"
									+ "<td><button class='btn btn-warning btn-rounded' data-toggle='modal' data-target='#stateTargetModal' id='editStateFinTarget'><i class='glyphicon glyphicon-pencil'</i></button></td>"
									+ "</tr>";

							stFinTargetData += tr;
						});
		$("#stateTargetTbody tr").remove();
		$("#stateTargetTbody").append(stFinTargetData);
		var dataTable = $('#stateTargetTable').DataTable({
			aaSorting : [ [ 1, 'desc' ] ],
			bPaginate : true,
			bFilter : true,
			bInfo : false,
			"aoColumnDefs" : [ {
				"bSortable" : false,
				"aTargets" : [ 3 ]
			} ],
			bSortable : true,
			bRetrieve : true,
			colReorder : true

		});
	}else{
		console.log("No Records Found")
	}

	},
	getCityData : function() {
		$(document).on('change','#state_codes,#fin_year_state_codes',function() {

							var stateId = $(this).val();

							$.ajax({url : "/SBMFundRequisition/fund/read/getCityListByState/"+ stateId,
										type : "POST",
										headers : headerData,
										dataType : 'json',
										contentType : "application/json",
										success : function(data) {

											var optionData = '';
											$.each(data.obj,function(key, val) {
																var options = "<option value='"
																		+ val.ulbCode
																		+ "'>"
																		+ val.ulbName
																		+ "</option>";
																optionData += options;
															});
											$("#city_codes option").remove();
											$("#fin_year_city_codes option").remove();

											$("#city_codes").append(optionData);
											$("#fin_year_city_codes").append(optionData);

										},
										error : function(data) {
											console.log(data);
										}
									});

						});
		
	},
	saveMasterSanitationData : function() {

		$(document).on("click","#mstrSanitationSave",function() {
var csa = $("#centerShareAmount").val();
if(csa != ""){
	

							var masterSanitationObj = new Object();
							if ($("#mstrSanId").val() != "") {
								var stateObj = new Object();
								stateObj.stateCode = $("#mstr_sani_state_codes").val();
								masterSanitationObj.ihhlId = $("#mstrSanId").val();
								masterSanitationObj.StateCode = stateObj;
								
								masterSanitationObj.centerShareAmount = csa;
								
							} else {

								var stateObj = new Object();
								stateObj.stateCode = $("#mstr_sani_state_codes").val();
								masterSanitationObj.StateCode = stateObj;
								
								masterSanitationObj.centerShareAmount = csa;
							}

							console.log(masterSanitationObj);
							$.ajax({
										url : "/SBMFundRequisition/fund/create/saveIhhlShareAmt",
										type : "POST",
										headers : headerData,
										dataType : 'json',
										data : JSON
												.stringify(masterSanitationObj),
										contentType : "application/json",
										success : function(data) {
											$('#infoPopup .modal-body .row')
													.html(
															"<p> Saved Successfully</p>")
											$('#infoPopup').modal();
											SBMFundRequisitionMasterHandler
													.getMasterSanitationData(data);
										},
										error : function(data) {
											console.log(data);
										}
									});
							$('#mstrSanitationModal').modal('toggle');
}else{
	$("#csaSpan").show();
	$("#csaSpan").delay(2000).fadeOut('slow');	
}

						});
		

		$("#mstrSanitationUploadSave").click(function() {
							var file = $("#mstrSanitationUploadFile")[0].files[0];
							var formData = new FormData();
							formData.append('file', file);
							$.ajax({
										url : "/SBMFundRequisition/fund/create/uploadIhhlShareAmt",
										type : "POST",
										data : formData,
										headers : headerData,
										enctype : "multipart/form-data",
										dataType : 'json',
										processData : false, // tell jQuery
										// not to
										// process the
										// data
										contentType : false,
										success : function(data) {
											$('#infoPopup .modal-body .row')
													.html(
															"<p> Saved Successfully</p>")
											$('#infoPopup').modal();
											SBMFundRequisitionMasterHandler
													.getMasterSanitationData(data);
										},
										error : function(data) {
											console.log(data);
										}
									});
						});

	},
	editMasterSanitationData : function() {
		$(document).on("click","#editMstrSanitation",function(e) {

							$("#mstrSanId").val($(this).closest("tr").attr("id"));
							$(this).closest("tr").each(function(i, el) {

												var $tds = $(this).find('td');

												stateId = $tds.eq(0)[0].id;
											
												var optionData = '';
												$.each(stateDataObj.obj,function(key,val) {
																	if (stateId == val.stateCode) {
																		var options = "<option selected value='"
																				+ val.stateCode
																				+ "'>"
																				+ val.stateName
																				+ "</option>";
																		optionData += options;
																	} else {
																		var options = "<option value='"
																				+ val.stateCode
																				+ "'>"
																				+ val.stateName
																				+ "</option>";
																		optionData += options;
																	}

																});


												$("#mstr_sani_state_codes option")
														.remove();
												$("#mstr_sani_state_codes").append(
														optionData);

												$("#centerShareAmount").val(
														$tds.eq(1).text());
												

											});

							console.log(e);

						});

	},
	getMasterSanitationData : function(data) {

		var trData = '';
		var usTab = "<div  class='table-responsive'> "
				+ "<table id='mstrSanitationTable' class='table table-striped text-center'> "
				+ "<colgroup> "
				+ "<col class='col-xs-4'> "
				+ "<col class='col-xs-4'> "
				+ "<col class='col-xs-4'> "
				+ "</colgroup> "
				+ "<thead> "
				+ "<tr> "
				+ "<th class='text-center'> State </th> "
				+ "<th class='text-center'> Center Share Amount </th> "
				+ "<th class='text-center'> Edit/View </th> " + "</tr> "
				+ "</thead> " + "<tbody id='mstrSanitationTbody'> " +

				"</tbody> " + "</table> " + "</div>";

		$("#mtrSanitationTab").html(usTab);
		if(data != undefined){
			console.log(data.obj);
		$.each(data.obj,function(key, val) {

							var tr = "<tr id='"
									+ val.ihhlId
									+ "'><td id='"
									+ val.StateCode.stateCode
									+ "'>"
									+ val.StateCode.stateName
									+ "</td>"
									+ "<td>"
									+ val.centerShareAmount
									+ "</td>"
									+ "<td><button class='btn btn-warning btn-rounded' data-toggle='modal' data-target='#mstrSanitationModal' id='editMstrSanitation'><i class='glyphicon glyphicon-pencil'</i></button></td>"
									+ "</tr>";

							trData += tr;
						});
		
		$("#mstrSanitationTbody tr").remove();
		$("#mstrSanitationTbody").append(trData);
		var dataTable = $('#mstrSanitationTable').DataTable({
			aaSorting : [ [ 1, 'desc' ] ],
			bPaginate : true,
			bFilter : true,
			bInfo : false,
			"aoColumnDefs" : [ {
				"bSortable" : false,
				"aTargets" : [ 2 ]
			} ],
			bSortable : true,
			bRetrieve : true,
			colReorder : true

		});
	}else{
		console.log("No Records Found")
	}
		

	},validateFormData : function(){
		jQuery('.master-form').keyup(function () {     
			  this.value = this.value.replace(/[^1-9\.]/g,'');
			});
	},getSanctionData : function(data){
		var trData = '';
		var usTab = "<div  class='table-responsive'> "
				+ "<table id='mstrSanctionTable' class='table table-striped text-center'> "
				+ "<colgroup> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col> "
				+ "</colgroup> "
				+ "<thead> "
				+ "<tr> "
				+ "<th class='text-center'> State  </th> "
				+ "<th class='text-center'> Sanction Date  </th> "
				+ "<th class='text-center'> Sanctioned By </th> "
				+ "<th class='text-center'> Sanctioned Amount  </th> "
				+ "<th class='text-center'> Financial Year </th> "
				+ "<th class='text-center'> Expense Head </th> "
				+ "<th class='text-center'> </th> " + "</tr> "
				+ "</thead> " + "<tbody id='mstrSanctionTbody'> " +

				"</tbody> " + "</table> " + "</div>";

		$("#mtrSanctionTab").html(usTab);
		if(data != undefined){
			console.log(data.obj);
		$.each(data.obj,function(keys, value) {
			$.each(value.sanctionHeadMaters,function(key, val) {

							var tr = "<tr id='"
									+ val.sanId
									+ "'><td id='"
									+ val.StateCode.stateCode
									+ "'>"
									+ val.StateCode.stateName
									+ "</td>"
									+ "<td>"
									+ val.SanctionDate
									+ "</td>"
									+ "<td>"
									+ val.sanctionedBy
									+ "</td>"
									+ "<td>"
									+ val.sanctionedAmount
									+ "</td>"
									+ "<td>"
									+ val.financialYear
									+ "</td>"
									+ "<td>"
									+ val.expenseHead
									+ "</td>"
									+"<td></td>"
									+ "</tr>";

							trData += tr;
			});
						});
		
		$("#mstrSanctionTbody tr").remove();
		$("#mstrSanctionTbody").append(trData);
		var dataTable = $('#mstrSanctionTable').DataTable({
			aaSorting : [ [ 1, 'desc' ] ],
			bPaginate : true,
			bFilter : true,
			bInfo : false,
			"aoColumnDefs" : [ {
				"bSortable" : false,
				"aTargets" : [ 6 ]
			} ],
			bSortable : true,
			bRetrieve : true,
			colReorder : true

		});
	}else{
		console.log("No Records Found")
	}
		
	},saveSanctionData : function(){
		$("#mstrSanctionUploadSave").click(function() {
			var file = $("#mstrSanctionUploadFile")[0].files[0];
			var formData = new FormData();
			formData.append('file', file);
			$.ajax({
						url : "/SBMFundRequisition/fund/create/uploadSanctionData",
						type : "POST",
						data : formData,
						headers : headerData,
						enctype : "multipart/form-data",
						dataType : 'json',
						processData : false, // tell jQuery
						// not to
						// process the
						// data
						contentType : false,
						success : function(data) {
							$('#infoPopup .modal-body .row')
									.html(
											"<p> Saved Successfully</p>")
							$('#infoPopup').modal();
							SBMFundRequisitionMasterHandler
									.getSanctionData(data);
						},
						error : function(data) {
							console.log(data);
						}
					});
		});
	},saveStateUtilizationData : function(){
		$("#stateUtilUploadSave").click(function() {
			var file = $("#stateUtilUploadFile")[0].files[0];
			var formData = new FormData();
			formData.append('file', file);
			$.ajax({
						url : "/SBMFundRequisition/fund/create/uploadStateUtilization",
						type : "POST",
						data : formData,
						headers : headerData,
						enctype : "multipart/form-data",
						dataType : 'json',
						processData : false, // tell jQuery
						// not to
						// process the
						// data
						contentType : false,
						success : function(data) {
							$('#infoPopup .modal-body .row')
									.html(
											"<p> Saved Successfully</p>")
							$('#infoPopup').modal();
							SBMFundRequisitionMasterHandler
									.getStateUtilizationData(data);
						},
						error : function(data) {
							console.log(data);
						}
					});
		});
	},getStateUtilizationData : function(data){
		var trData = '';
		var usTab = "<div  class='table-responsive'> "
				+ "<table id='stateUtilMasTable' class='table table-striped text-center'> "
				+ "<colgroup> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col class='col-xs-2'> "
				+ "<col> "
				+ "</colgroup> "
				+ "<thead> "
				+ "<tr> "
				+ "<th class='text-center'> State  </th> "
				+ "<th class='text-center'> Expense Head  </th> "
				+ "<th class='text-center'> Work Completed </th> "
				+ "<th class='text-center'> Utilization Amount  </th> "
				+ "<th class='text-center'> Financial Year </th> "
				+ "<th class='text-center'> Utilization Created Date </th> "
				+ "<th class='text-center'>  </th> "+ "</tr> "
				+ "</thead> " + "<tbody id='stateUtilMasTbody'> " +

				"</tbody> " + "</table> " + "</div>";

		$("#stateUtilizationTab").html(usTab);
		if(data != undefined){
			console.log(data.obj);
		$.each(data.obj,function(keys, value) {
			$.each(value.stateUtilizationHeadMasters,function(key, val) {

							var tr = "<tr id='"
									+ val.sanId
									+ "'><td id='"
									+ val.StateCode.stateCode
									+ "'>"
									+ val.StateCode.stateName
									+ "</td>"
									+ "<td>"
									+ val.expenseHead
									+ "</td>"
									+ "<td>"
									+ val.workCompleted
									+ "</td>"
									+ "<td>"
									+ val.utilizationAmount
									+ "</td>"
									+ "<td>"
									+ val.financialYear
									+ "</td>"
									+ "<td>"
									+ val.utilizationCreatedDate
									+ "</td>"
									+"<td></td>"
									+ "</tr>";

							trData += tr;
			});
						});
		
		$("#stateUtilMasTbody tr").remove();
		$("#stateUtilMasTbody").append(trData);
		var dataTable = $('#stateUtilMasTable').DataTable({
			aaSorting : [ [ 1, 'desc' ] ],
			bPaginate : true,
			bFilter : true,
			bInfo : false,
			"aoColumnDefs" : [ {
				"bSortable" : false,
				"aTargets" : [ 6 ]
			} ],
			bSortable : true,
			bRetrieve : true,
			colReorder : true

		});
	}else{
		console.log("No Records Found")
	}
		
	}
}