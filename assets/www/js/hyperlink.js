function loadURL(url)
{
		navigator.app.loadUrl(url, { openExternal:true });
		return false;
}