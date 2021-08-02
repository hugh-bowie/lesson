const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  await page.goto('https://app.simplicitycollect.com/MasterView.aspx?case_id=1')
  
  await page.setViewport({ width: 1920, height: 937 })
  
  let frames = await page.frames()
  const frame_27 = frames.find(f => f.url() === 'https://app.simplicitycollect.com/CleanScreen.aspx?master=MasterClean&case_id=1')
  await frame_27.waitForSelector('tr #CP1_statusDDL')
  await frame_27.click('tr #CP1_statusDDL')
  
  await frame_27.waitForSelector('tr #CP1_statusDDL')
  await frame_27.click('tr #CP1_statusDDL')
  
  await frame_27.waitForSelector('tr #CP1_btnSendCustomMessage')
  await frame_27.click('tr #CP1_btnSendCustomMessage')
  
  await frame_27.waitForSelector('body > #popup_container > #popup_content #popup_ok')
  await frame_27.click('body > #popup_container > #popup_content #popup_ok')
  
  await frame_27.waitForSelector('tr #CP1_ddlCustomMessages')
  await frame_27.click('tr #CP1_ddlCustomMessages')
  
  await frame_27.select('tr #CP1_ddlCustomMessages', '23')
  
  await frame_27.waitForSelector('tr #CP1_ddlCustomMessages')
  await frame_27.click('tr #CP1_ddlCustomMessages')
  
  await frame_27.waitForSelector('tr #CP1_btnSendCustomMessage')
  await frame_27.click('tr #CP1_btnSendCustomMessage')
  
  await frame_27.waitForSelector('div > #CP1_pnlGenerateDoc #CP1_btnGenerateDocCancel')
  await frame_27.click('div > #CP1_pnlGenerateDoc #CP1_btnGenerateDocCancel')
  
  await browser.close()
})()