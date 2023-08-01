import puppeteer from "puppeteer";

export default async function findProductWithMinOrMaxPriceWb(productName, mode = "min") {
    const sortMethods = ["priceup", "pricedown"];

    let url;
    mode === "min"
      ? (url = `https://www.wildberries.ru/catalog/0/search.aspx?sort=${sortMethods[0]}&search=${productName}`)
      : (url = `https://www.wildberries.ru/catalog/0/search.aspx?&sort=${sortMethods[1]}&search=${productName}`) &&
        (mode = "max");

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const html = await page.content();
    // console.log(html);
    return html;
}