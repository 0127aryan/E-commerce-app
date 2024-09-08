const Category = require("../models/categoryModels");



const categoryController ={
    getCategories: async(req,res)=> {
       try{
            const categories = await Category.find();
            res.json(categories)
       }
       catch(err){
        return res.status(500).json({msg:err.message})
       }
    },

    createCategory: async (req, res) => {
        try {
          const { name } = req.body;
          const category = await Category.findOne({ name });
      
          if (category) {
            return res.status(400).json({ msg: "Category Already Exists" });
          }
      
          const newCategory = new Category({ name });
          const savedCategory = await newCategory.save();
      
          if (savedCategory) {
            return res.status(201).json({ msg: "Category Created Successfully" });
          } else {
            return res.status(500).json({ msg: "Failed to create category" });
          }
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
      },

      deleteCategory: async(req,res) => {
        try{
            await Category.findByIdAndDelete(req.params.id)
            res.json({msg:"Deleted a category"})

        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
      },
      updateCategory: async(req,res) => {
        try{
            const {name} = req.body;
            await Category.findByIdAndUpdate({_id:req.params.id},{name})

            res.json({msg:"Updated Successfully"})

        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
      }
    }

module.exports = categoryController