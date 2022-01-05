import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    selectedFile: String,
    computerChoice: String,
    playerChoice:String,
    likeCount: {
        type: Number,
        default: 0,
    },
    computerCount: {
        type: Number,
        default: 0,
    },
    playerCount: {
        type: Number,
        default: 0,
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;