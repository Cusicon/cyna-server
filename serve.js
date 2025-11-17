const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 2026

require('./dbconnect')
const { addNotifyuslist } = require("./database/models/notifyuslist")

app.use(cors())
app.use(express.static(__dirname))
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.status(200).json({ response: "Sponsored by CYNA.AFRICA!" })
})

app.post("/JSCjsh93820", async (req, res) => {
  try {
    const { phoneno } = req.body
    const user_agent = req.header("User-Agent")

    const obj = {
      phone: phoneno,
      category: "",
      country: "Nigeria",
      country_code: "NG",
      user_agent: user_agent,
      time: time
    }

    const added = await addNotifyuslist({ ...obj })
    if (added) return res.status(201).json({ response: "Ok, added!" })

  } catch (error) {
    console.log("CATCH ERR: ", error)
    res.status(400).json({ response: error?.msg || error })
  }
})

app.listen(PORT, (err) => {
  if (err) throw err
  else console.log("Listening on " + PORT)
})