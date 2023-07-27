// Imports
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';



import Greeting from '../components/Greeting';

// Tests
describe('Renders main page correctly', async () => {
    it('Should render the page correctly', async () => {
        // Setup
        render(<Greeting user={{userName: 'Hans', id: 10}}/>);
        const greeting = await screen.queryByText('Hello Hans! user#:10');

        // Expectations
        expect(greeting).not.toBeNull();
    });
});