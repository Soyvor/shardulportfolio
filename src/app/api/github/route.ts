import { NextResponse } from 'next/server';
import { parseISO, format, subMonths, startOfMonth } from 'date-fns';

export async function GET() {
  const username = 'Shardulkacheria';

  try {
    // Fetch user data
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    if (!userRes.ok) {
      const errorData = await userRes.json();
      console.error(`GitHub API error (user): ${userRes.status} ${userRes.statusText}`, errorData);
      return NextResponse.json({ message: 'Failed to fetch GitHub user data' }, { status: userRes.status });
    }

    const userData = await userRes.json();

    // Fetch repositories data using the provided endpoint
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    if (!reposRes.ok) {
      const errorData = await reposRes.json();
      console.error(`GitHub API error (repos): ${reposRes.status} ${reposRes.statusText}`, errorData);
      // If repo fetch fails, return user data without repo-specific stats
      return NextResponse.json(userData);
    }

    const reposData = await reposRes.json();

    let totalForks = 0;
    let totalCommitsEstimate = 0; // Will be an estimate based on pushed_at

    // Prepare data for commit history chart (repos pushed per month)
    const activityByMonth: { [key: string]: number } = {};
    const today = new Date();

    // Initialize activity for the last 6 months
    for (let i = 5; i >= 0; i--) {
      const month = format(subMonths(today, i), 'MMM yy');
      activityByMonth[month] = 0;
    }

    reposData.forEach((repo: any) => {
      totalForks += repo.forks_count;
      if (repo.pushed_at) {
        totalCommitsEstimate += 10; // Arbitrary increment for activity, not actual commits
        const pushedDate = parseISO(repo.pushed_at);
        const month = format(pushedDate, 'MMM yy');
        if (activityByMonth[month] !== undefined) {
          activityByMonth[month]++;
        }
      }
    });

    const commitHistory = Object.keys(activityByMonth).map(month => ({
      date: month,
      count: activityByMonth[month],
    }));

    // Combine all data
    const combinedData = {
      ...userData,
      total_forks: totalForks,
      commit_history: commitHistory,
    };

    return NextResponse.json(combinedData);
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}