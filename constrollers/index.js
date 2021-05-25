function sendMessage(req, res){
    const {name, message} = req.body;
    console.log(req.body.name)
	let phone = 5514998338196;
    let text = message + '\n \n' + 'Enviado por ' + '*' + name + '*'
    console.log(text)
    text = encodeURIComponent(text);
    let url = "https://api.whatsapp.com/send?phone=" + phone + "&text=" + text;
   
   res.redirect(url);
}
module.exports = {
    sendMessage,
  }