export const toggleActionLesson = (module, lesson) => {
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson,
    };
}