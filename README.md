# React Native useEffect Cleanup Function Error

This repository demonstrates a common, yet subtle bug in React Native applications related to the `useEffect` hook and its cleanup function.  The bug occurs when the cleanup function attempts to access or modify component state or props after the component has unmounted. This often leads to silent errors or unexpected behavior.

The solution shows how to correctly handle potential errors and ensure the cleanup function safely executes even after unmounting.

## Setup

1. Clone the repository:
   `git clone [repository URL]`
2. Navigate to the project directory:
   `cd [project directory]`
3. Install dependencies:
   `npm install` or `yarn install`
4. Run the app:
   `npx react-native run-android` or `npx react-native run-ios`

## Bug and Solution Explained

The `useEffectBug.js` file contains the buggy implementation. The `useEffectBugSolution.js` file shows the corrected version.

The core problem is that the cleanup function relies on a component variable (`someState`) that is no longer valid once the component has unmounted.  The solution adds a check to make sure the component is still mounted before attempting to access `someState`.