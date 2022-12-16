const express = require('express')
const router = express.Router()
const members = require('../../Members')
const uuid = require('uuid')


router.get('/' , ( req, res ) => {
    res.json(members)
})



router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(404).json ( { msg: `No member with the id of ${req.params.id}`})
    }
})

router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if( !newMember.name || !newMember.email ){
        return res.status(400).json ({ msg: 'Must have email and name'})
    }

    members.push(newMember)
    // res.json(members)
    res.redirect('/')
}) 


// Update Member

router.put('/:id', ( req, res ) => {
    const found = members.some(member => member.id === parseInt(req.params.id)) 
    
    if(found){
        const updMember = req.body;
        members.forEach( member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name : member.name,
                member.email = updMember.email ? updMember.email : member.email

                res.json({ msg: 'Member was updated', member})
            }
        });
    }else{
        return res.status(400).json ({ msg: `No member with the id ${req.params.id}`})
    }
    
}  
    
)    


// Delete

router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if(found){
       res.json({
        msg: `Member deleted`,
        members: members.filter(member => member.id !== parseInt(req.params.id))})
    } else {
        res.status(400).json  ({ msg: `No member with the id of ${req.params.id}`})
    }
})







module.exports = router


