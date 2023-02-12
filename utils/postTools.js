/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-12 16:59:43
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-12 18:16:30
 */
import fs from "fs"
import fsPromises from "fs/promises"
import path from 'path';
import { format } from 'date-fns';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';

const postPath = path.join(process.cwd(), "public", "posts")
//解析每个标记文件，并且获取title,data和文件名（用于url）
//在索引页面上列出数据 按照日期排序
export const getSortedPostData = async () => {
    const postNames = await fsPromises.readdir(postPath)
    const allPostsData = postNames
        .filter((name) => name !== '.DS_Store')
        .map((name) => {
            const id = name.replace(".md", '')
            const mdContent = fs.readFileSync(path.join(postPath, name), { encoding: "utf-8" })

            const matterData = matter(mdContent)
            return {
                id,
                ...matterData.data,
                date: format(matterData.data.date, 'LLLL d, yyyy'),
            }
        })
    return allPostsData.sort(({ date: a }, { date: b }) => {
        const timeA = new Date(a);
        const timeB = new Date(b);
        return timeB.getTime() - timeA.getTime();
    });
}
//获取id 组成路径
export const getAllIds = async () => {
    const postNames = await fsPromises.readdir(postPath);
    return postNames
        .filter((name) => name != '.DS_Store')
        .map((name) => ({
            params: {
                id: name.replace('.md', ''),
            },
        }));
}
//获取id路径的内容
export const getPostById = async (id) => {
    const postIdPath = path.join(process.cwd(), 'public', 'posts', `${id}.md`);
    const mdContent = await fsPromises.readFile(path.join(postIdPath), {
        encoding: 'utf-8',
    });
    // use gray-matter to parse the post metadata section
    const matterData = matter(mdContent);
    // md --> html and highlight codeblock
    const content = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeHighlight)
        .use(rehypeDocument)
        .use(rehypeFormat)
        .use(rehypeStringify)
        .process(matterData.content);
    const htmlContent = content.value;
    return {
        id,
        date: format(matterData.data.date, 'LLLL d, yyyy'),
        title: matterData.data.title,
        htmlContent,
    };
};