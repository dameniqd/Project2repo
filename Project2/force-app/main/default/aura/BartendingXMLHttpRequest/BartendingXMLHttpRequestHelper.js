({
    makeAjaxRequest : function(component, url) {
        var utils = component.find('bartending');
        
        //Make Ajax request by calling method from utils component
        utils.callAjax("POST", url, true,
                        function(xmlhttp){
                            console.log('xmlhttp:', xmlhttp);

                            //Show response text if successful
                            //Display error message otherwise
                            if (xmlhttp.status == 200) {
                                component.set('v.msg', xmlhttp.responseText);
                                component.set('v.msgSeverity', 'information');
                                component.set('v.msgTitle', 'Success');
                            }
                            else {
                                component.set('v.msg', 'There was an error 400');
                                component.set('v.msgSeverity', 'error');
                                component.set('v.msgTitle', 'Error');
                            }
                        }
                      );
    }
})