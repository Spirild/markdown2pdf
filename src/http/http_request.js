const HttpRequest = {
    async commonRequest( path, req ) {
        var address = process.env.BACK_URL   
        var url = address + path;
        
        const response = await fetch(url, {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req)
        });
        if (!response.ok) {
            // 后续可以自定义报错
            throw new Error('Server Error');
        }
        return await response.json();
    },

    async commonGet( path ) {
        var address = process.env.BACK_URL    
        var url = address + path;
        
        const response = await fetch(url, {
            method: "GET",
            credentials: 'include',
        });
        if (!response.ok) {
            // 后续可以自定义报错
            throw new Error('Server Error');
        }
        return await response.json();
    }

}

const JpLiteHttpRequest = {

    async getJpLiteTable( req ) {
        var address = process.env.BACK_URL    
        var url = address + "/selectJpTable";
        
        const response = await fetch(url, {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req)
        });
        if (!response.ok) {
            // 后续可以自定义报错
            throw new Error('Server Error');
        }
        return await response.json();
    },
}

const MarkdownRequest = {

    async saveMarkdown( str ) {
        var address = process.env.BACK_URL    
        var url = address + "/saveMarkdown";
        
        const response = await fetch(url, {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: str
        });
        if (!response.ok) {
            // 后续可以自定义报错
            throw new Error('Server Error');
        }
        return await response.json();
    },
}

export default HttpRequest
export { JpLiteHttpRequest, MarkdownRequest }
