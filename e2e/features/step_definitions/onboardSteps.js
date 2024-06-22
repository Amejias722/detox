import { Given, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(120 * 1000);

Given("I open detox", async function () {
    console.log("Starting detox")
});