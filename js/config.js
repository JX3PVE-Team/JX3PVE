require.config({
    baseUrl: 'http://www.jx3pve.com/js/',
    paths: {
    	test: 'mod/test',
        jquery: 'lib/jquery-1-10-2',
        macroSytax: 'plugin/macroSytax',
        fixSidebar: 'plugin/fixSidebar',
        urlParam: 'plugin/getRequest',
        responsive: 'mod/responsive',
        menu: 'mod/menu',
        cur: 'mod/cur'
    },
    shim: {
        'responsive':{
            deps: ['jquery']
        },
        'fixSidebar':{
            deps: ['jquery']
        },
        'cur': {
            deps: ['jquery']
        },
        'menu': {
            deps: ['jquery']
        }
    }
});