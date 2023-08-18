exports.getAbout = async (req,res,next) => {
    try {
    res.render('about', {
        path : '/about',
        pageTitle : 'About Us'
    })
}
    catch(err) {
        console.log(err)
        next(err)
    }
}