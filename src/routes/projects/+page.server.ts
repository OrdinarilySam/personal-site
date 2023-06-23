import { projects } from '$lib/data/projects';

export function load() {
	return {
		summaries: projects.map((project) => ({
			slug: project.slug,
			title: project.title,
			description: project.description
		}))
	};
}
