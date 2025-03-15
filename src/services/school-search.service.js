const facebookService = require('./facebook.service');

const DAY_IN_MS = 1000 * 60 * 60 * 24;

exports.findSchools = async (query) => {
    // Search for pages using the provided query
    const pages = await facebookService.searchPages(query);

    // Filter pages: ensure there's no website and fan_count > 100
    const filteredPages = pages.filter(page => {
        return (!page.website || page.website.trim() === '') && page.fan_count > 100;
    });

    // Further filter by checking if the latest post is within 30 days
    const recentPages = [];
    for (const page of filteredPages) {
        const latestPost = await facebookService.getLatestPost(page.id);
        if (latestPost) {
            const postDate = new Date(latestPost.created_time);
            const daysAgo = (Date.now() - postDate.getTime()) / DAY_IN_MS;
            if (daysAgo <= 30) {
                recentPages.push(page);
            }
        }
    }

    return recentPages;
};
