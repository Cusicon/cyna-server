const Notifyuslist = require('../schemas/notifyuslist.schema')

// Create a Notifyuslist
const addNotifyuslist = async (obj) => {
  try {
    const notifyuslist = await Notifyuslist.create({ ...obj })
    return notifyuslist
  } catch (err) {
    err.message =
      err.code === 11000 ? 'Sorry, notifyuslist already exist!' : err.message

    throw new Error(err.message)
  }
}

// Find Notifyuslists
const findNotifyuslists = async () => {
  try {
    const notifyuslists = await Notifyuslist.find().lean()
    return notifyuslists
  } catch (err) {
    throw new Error(err.message)
  }
}

// Find a Notifyuslist
const findNotifyuslist = async (obj) => {
  try {
    const found_notifyuslist = await Notifyuslist.findOne({ ...obj }).lean()
    return found_notifyuslist
  } catch (err) {
    throw new Error(err.message)
  }
}

// Update Notifyuslist
const updateNotifyuslist = async (obj, updatedObj) => {
  try {
    const updated_notifyuslist = await Notifyuslist.updateOne(
      { ...obj },
      { ...updatedObj }
    ).lean()
    return updated_notifyuslist
  } catch (err) {
    throw new Error(err.message)
  }
}

// Delete Notifyuslist
const deleteNotifyuslist = async (obj) => {
  try {
    const deleted_notifyuslist = await Notifyuslist.deleteOne({ ...obj })
    return deleted_notifyuslist
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = { addNotifyuslist, findNotifyuslist, findNotifyuslists, updateNotifyuslist, deleteNotifyuslist }
