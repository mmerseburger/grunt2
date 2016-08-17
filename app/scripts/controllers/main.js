'use strict';

/**
 * @ngdoc function
 * @name calcardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calcardApp
 */
angular.module('calcardApp')
  .controller('MainCtrl', function () {
    var main = this;
    main.currentStep = 1;
    main.steps = [
      {
        step: 1,
        name: "Dados de identificação",
        state: "identificacao"
      },
      {
        step: 2,
        name: "Dados Residenciais",
        state: "residencial"
      },   
      {
        step: 3,
        name: "Dados Profissionais",
        state: "profissional"
      },
      {
        step: 4,
        name: "Dados da Fatura",
        state: "fatura"
      },
      {
        step: 5,
        name: "Documentos Digitalizados",
        state: "documentos"
      },
      {
        step: 6,
        name: "Confirmação",
        state: "confirmacao"
      },
    ];

    main.gotoStep = function(newStep) {
      	main.currentStep = newStep;
      	for (var i = 0; i < main.steps.length; i++) {
				if (newStep == main.steps[i].step) {
        			$state.transitionTo(main.steps[i].state, {arg:'arg'});
				}
			}
    }

    main.getCurrentTitle = function(index) {
    	alert(main.steps[index].name);
    	return main.steps[index].name;
    }

  });
