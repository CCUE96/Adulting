const {Schema,model} = require('mongoose')

const { Schema, model } = require('mongoose');

const fitnessSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    diet: {
        type: Map,
        of: [String],
        default: {}
    },
    // ask ai for recipes with calories of what food items you currently have in the house similar to pantry raid
    groceries: {
        type: Map,
        of: [String], 
        default: {}
    },
    workouts: {
        type: Map,
        of: [{
            duration: Number,
            intensity: {
                type: String,
                enum: ['Low', 'Medium', 'High']
            },
            date: {
                type: Date,
                default: Date.now
            }
        }],
        default: {}
    }
});

const Fitness = model('Fitness', fitnessSchema);

module.exports = Fitness;