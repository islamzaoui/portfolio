import type { Experience, Project } from './types';
import { dev } from '$app/environment';

import { PUBLIC_CONTACT_EMAIL } from '$env/static/public';

import himmob from '@/assets/himmob.png';

export const url = dev ? 'http://localhost:5173' : 'https://portfolio.zaoui-islam2021.workers.dev';

export const email = PUBLIC_CONTACT_EMAIL;

export const experiences: Experience[] = [
	{
		title: 'Lead Back-End Engineer',
		at: 'Himmob & Techssales',
		isCurrent: true,
	},
	{
		title: 'Full-Stack Web Developer',
		at: 'Freelance',
		isCurrent: false,
	},
];

export const projects: Project[] = [
	{
		name: 'Himmob',
		url: 'https://himmob.com',
		description:
			'A real estate platform helping users find properties for sale or rent in Algeria. I migrated its backend that serves over 7k+ users from legacy PHP/MySQL to a modern high-performance stack.',
		image: himmob,
	},
];
