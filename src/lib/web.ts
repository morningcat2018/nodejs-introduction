import request from 'request'
import jsdom from 'jsdom';

const {JSDOM} = jsdom;

function goto(url: string): Promise<string> {
    return new Promise(((resolve, reject) => {
      request({
        url,
      }, ((error, response, body) => {
        if (error) {
          return reject(error);
        }
        resolve(body);
      }))
    }))
  }

  export async function fetch(url: string) {
    const html = await goto(url);
    const dom = new JSDOM(html).window.document;

    return {
        dom
    }
  
  }