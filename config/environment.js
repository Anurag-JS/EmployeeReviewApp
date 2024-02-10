// Encode database password to handle special characters
const dbpassword = encodeURIComponent('PlacementCell@codingninjas');

// Development configuration object
const developement = {
    name: 'development', 
    port: 8080,                              
    secret_key: '#placementCell@careercamp$$Team&&&interface##Anurag%%', 
    mongoose_path: `mongodb+srv://anuragv:${dbpassword}@cluster0.emzh9dy.mongodb.net/
                    ?retryWrites=true&w=majority`,
};


module.exports = developement; // Export development configuration object
