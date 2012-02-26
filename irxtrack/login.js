var Irxtrack = Irxtrack || {};

;(function(mod) {
    var CLIENT_ID = '92bb3cbefd09292ee1ee';
    var LOGIN_URL = 'https://github.com/login/oauth/authorize';
    var self_url = location.scheme + "://" + location.host + "/"
    
    mod.redirect_to_login = function() {
        location.href = LOGIN_URL;
        
    }
})(Irxtrack);


