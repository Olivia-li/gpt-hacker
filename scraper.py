from playwright.sync_api import sync_playwright
from dotenv import load_dotenv
import time
import random
import os

load_dotenv()


def run(playwright):
    browser = playwright.chromium.launch(
        headless=False
    )  # Set headless=True to run browser in background
    page = browser.new_page()

    # Navigate to the login page
    page.goto(f'{os.environ["domain"]}/member.php?action=login')

    time.sleep(random.randint(1, 5))

    page.evaluate("window.scrollBy(0, window.innerHeight)")
    
    time.sleep(random.randint(1, 5))

    # Fill in login details
    page.fill('input[name="username"]', os.environ["username"])
    page.fill('input[name="password"]', os.environ["password"])

    # Click the login button
    page.click('button[type="submit"]')

    # Wait for navigation to complete
    page.wait_for_load_state("networkidle")

    # Now you are logged in, navigate to the data page
    page.goto(f'{os.environ["domain"]}/showthread.php?tid=2059771')

    # Perform your scraping tasks here
    # Example: print(page.content())

    # Close the browser
    browser.close()


with sync_playwright() as playwright:
    run(playwright)
