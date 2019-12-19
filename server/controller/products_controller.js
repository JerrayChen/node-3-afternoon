function create(req, res){
    let { name, description, price, image_url } = req.body;
    const db = req.app.get('db');
    db.create_product(name, description, price, image_url).then(response=>{
        res.status(200).json(response);
    }).catch(err => console.log(err));
}

function getOne(req, res){
    const db = req.app.get('db');
    db.read_product(req.params.product_id).then(response=>{
        res.status(200).json(response);
    }).catch(err => console.log(err));
}

function getAll(req, res){
    const db = req.app.get('db');
    db.read_products().then(response=>{
        res.status(200).json(response);
    }).catch(err => console.log(err));
}

function update(req, res){
    let product_id = req.params.product_id;
    let description = req.query.desc;
    const db = req.app.get('db');
    db.update_product(product_id, description).then(response => {
        res.status(200).json(response);
    }).catch(err=>console.log(err));
}

function deleteProduct(req, res){
    const db = req.app.get('db');
    db.delete_product(req.params.product_id).then(response => {
        res.status(200).json(response);
    }).catch(err=>console.log(err));
}

module.exports = {
    create,
    getOne,
    getAll,
    update,
    deleteProduct
}