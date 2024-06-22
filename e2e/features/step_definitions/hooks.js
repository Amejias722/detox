import { BeforeAll, Before, AfterAll } from "@cucumber/cucumber";
import { init, cleanup } from "detox/internals";

BeforeAll({ timeout: 60 * 1000}, async function () {
    await init();
});

Before(async function () {
    await device.launchApp({newInstance: true});
} );

AfterAll(async function () {
    await cleanup();
});