module.exports = {
    getSlug : (name) => {
        return name.toLowerCase().replace(/ /g,"_")
    }
}