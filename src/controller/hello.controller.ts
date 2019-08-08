import {Request, Response, Router} from 'express';
import * as web from '../lib/web';

const {validationResult, param, query} = require('express-validator');

const router: Router = Router();


function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({errors: errors.array()});
  }
  next();
}

router.get('/url', [query('url').exists().isURL()], validate, (req: Request, res: Response) => {


    const {url} = req.query;
    web.fetch(encodeURI(url))
      .then(v => {
        res.json({
          status: 200,
          data: v
        })
      })
      .catch(err => {
        res.json({
          status: -1,
          message: err.message
        });
      })
  });



  // ...


  export const HelloController: Router = router;