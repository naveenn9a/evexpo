// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs');

export default function handler(req, res) {
  console.log("Got visitor", req.method)
  if (req.method == 'POST') {
    fs.readFile('./visitors.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }

      let newCount = Number(data.trim()) + 1;

      fs.writeFile('./visitors.txt', newCount.toString(), err => {
        if (err) {
          console.error(err);
        }

        res.send(newCount)
      })
    });
  } else {
    fs.readFile('./visitors.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }

      res.send(data)
    })
  }
}
