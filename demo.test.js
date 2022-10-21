require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("selenium tests", function () {
    this.timeout(30_000);




    it("should find 70.4", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("http://localhost:3000/testing/ex1");
            const miles = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
            await miles.sendKeys("44");
            const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
            expect(await result.getAttribute("value")).to.equal("70.4");
        } finally {
            driver.quit();
        }
    })


    it("should find 44", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("http://localhost:3000/testing/ex1");
            const miles = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
            await miles.sendKeys("70.4");
            const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
            expect(await result.getAttribute("value")).to.equal("44");
        } finally {
            driver.quit();
        }
    })

    it("should find 70.4", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("http://localhost:3000/testing/ex1");
            const miles = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
            await miles.sendKeys("44");
            const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
            expect(await result.getAttribute("value")).to.equal("70.4");
        } finally {
            driver.quit();
        }
    })


    it("should find batman", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("http://localhost:3000/testing/ex3");
            const findFilm = await driver.findElement(By.css("#filmTitle"));
            await findFilm.sendKeys("batman");
            await findFilm.sendKeys(ENTER);
            const result = await driver.findElement(By.css("#root > div > div.container > div.container > div > div:nth-child(1) > div > img"));
            expect(await result.getAttribute("value")).to.equal("Batman Begins");
            await findFilm (await driver.findElement(By.css("#root > div > div.container > div.container > div > div:nth-child(1) > div > img").click))
            expect (await result.getAttribute("Value")).to.equal("Year: 2005")
        } finally {
            driver.quit();
        }
    })

    it("should find press +1 5 times", async () => {
        const driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("http://localhost:3000/testing/ex2");
            const addOne = await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(4)"));
            for (let i = 0; i < 5; i++) {
                await (await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(4)")));
            }
            const result = await driver.findElement(By.css("#root > div > div.container > div.input-group > input"));
            expect(await result.getAttribute("value")).to.equal("5");
        } finally {
            driver.quit();
        }
    })
})
