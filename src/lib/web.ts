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
      const summary = resolveSummary(dom);
      const birthday = resolveBirthday(dom);
      const works = resolveWorks(dom);

      return {
          summary,
          birthday,
          works,
      }
  
  }


/**
 * 基本信息
 */
function resolveSummary(dom: Document): string {
    const ele = dom.querySelector('.lemma-summary');
    ele.querySelectorAll('sup').forEach(v => v.remove());
    return ele.textContent;
}

/**
 * 出生日期
 */
function resolveBirthday(dom: Document): string {
    const ele = dom.querySelectorAll('.basic-info .basicInfo-item.name');
    return Array.from(ele)
        .find(v => v.textContent.trim() === '出生日期')
        .nextElementSibling.textContent.trim();
}

/**
 * 代表作品列表
 */
function resolveWorks(dom: Document): { title: string, img: string }[] {
    const ele = dom.querySelectorAll('#slider_works li a');
    return Array.from(ele).map(v => {
        const img = v.firstElementChild.getAttribute('src');
        const title = v.lastElementChild.textContent.trim();
        return {
            title, img
        }
    })
}