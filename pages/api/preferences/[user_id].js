import nextConnect from "next-connect";

import mongodb from "../../../middleware/database";

const handler = nextConnect();

handler.use(mongodb);
/* Event schema
  {
    date: timestamp when record created
    value: value of the record.
  }
*/
handler.get(async (req, res) => {
  // find returns a cursor which we need to iterate through to get the results.
  // use next or toArray
  const doc = await req.db
    .collection("preferences")
    .find({ user_id: req.query.user_id })
    .toArray();
  // console.log(doc)
  res.json(doc);
});

handler.post(async (req, res) => {
  const data = JSON.parse(req.body);
  data.date = new Date();
  data.user_id = data.user_id || req.query.user_id;

  if (data._id) {
    // We can't update the id of the item
    delete data._id;
  }

  try {
    await req.db
      .collection("preferences")
      .updateOne({ user_id: data.user_id }, { $set: data }, { upsert: true });
    res.json({ message: "ok" });
  } catch (e) {
    res.json({ message: "error", e });
    console.log("Error", e);
  }
});

export default handler;
