//tell systemjs just the PATHs of where everything is located
var map = {
    'app': 'js/src',
    'rxjs': 'js/vendor/rxjs',
    '@angular': 'js/vendor/@angular',
    'ng2-bootstrap': 'js/vendor/ng2-bootstrap',
    'moment': 'js/vendor/moment/moment.js',
    'angular2-jwt': 'js/vendor/angular2-jwt/angular2-jwt.js'
};

//packages tells system js to load these specific files from the above mapped paths
var packages = {
    'app': { main: 'boot.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'ng2-bootstrap': { defaultExtension: 'js' },
    'angular2-jwt': { defaultExtension: 'js' }
};

var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/forms',
    '@angular/testing',
    '@angular/upgrade'
];

//loop adds each of the specified packages to the packages object
packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
});


//config file sets up an object of above details
var config = {
    map: map,
    packages: packages
};

//tells sytem js to refer to config above
System.config(config);

