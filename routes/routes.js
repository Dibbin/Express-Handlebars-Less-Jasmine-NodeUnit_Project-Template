var isProduction = false;
function makeRoute(template){
    return function (req, res) {
        var view = {
            title: 'Project Title',
            isProduction: isProduction,
            isIndex: template === 'index',
            isContact: template === 'contact',
            isAbout: template === 'about'
        };
        if(req.query.l === '0'){
            view.layout = false;
        }
        res.render(template, view);
    };
}

/* GET home page. */
exports.index = makeRoute('index');
/* GET contact page. */
exports.contact = makeRoute('contact');
/* GET about page. */
exports.about = makeRoute('about');

exports.setProductionMode = function(){
    isProduction = true;
};