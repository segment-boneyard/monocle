'use strict';

/**
 * Simulator Controller
 */

angular
  .module('Simulator')
  .controller('simulatorController', [function() {
    var vm = this;
    vm.simulate = simulate;
    vm.integrations = [
      {
        name: 'Mixpanel',
        slug: 'integration-mixpanel'
      } 
    ];
    vm.eventTypes = ['page', 'identify', 'track', 'group', 'alias'];
    vm.event = {};
    
    function simulate() {
      var event = vm.event;
      var payload = {
        workspaceName: event.workspaceName,
        sourceName: event.sourceName,
        integrationSlug: event.integrationSlug,
        userId: event.userId,
        context: parse(event.context) 
      };
      if (event.type === 'identify') {
        payload.properties = parse(event.traits);  
      } else {
        payload.properties = parse(event.properties);  
      }
      payload.integrations = parse(event.integrations);
      console.log('payload', payload)
    }

    function parse(string) {
      if (JSON && JSON.parse(string)) return JSON.parse(string); 
    }
  }]);
