

exports.getHome = async (req,res,next) => {
    try {
    res.render('home', {
        path : '/',
        pageTitle : 'Home'
    })
}
    catch(err) {
        console.log(err)
        next(err)
    }
}