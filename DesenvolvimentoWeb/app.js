function App() {
    try {
        const [selectedDate, setSelectedDate] = React.useState(new Date());
        const [workouts, setWorkouts] = React.useState(getWorkouts());

        React.useEffect(() => {
            setWorkouts(getWorkouts());
        }, []);

        const handleDateSelect = (date) => {
            setSelectedDate(date);
        };

        const handleAddExercise = (exercise) => {
            const dateStr = formatDate(selectedDate);
            const updatedWorkouts = {
                ...workouts,
                [dateStr]: [
                    ...(workouts[dateStr] || []),
                    { ...exercise, id: Date.now(), completed: false }
                ]
            };
            setWorkouts(updatedWorkouts);
            saveWorkouts(updatedWorkouts);
        };

        const handleToggleComplete = (exerciseId) => {
            const dateStr = formatDate(selectedDate);
            const updatedWorkouts = {
                ...workouts,
                [dateStr]: workouts[dateStr].map(ex =>
                    ex.id === exerciseId ? { ...ex, completed: !ex.completed } : ex
                )
            };
            setWorkouts(updatedWorkouts);
            saveWorkouts(updatedWorkouts);
        };

        const handleRemoveExercise = (exerciseId) => {
            const dateStr = formatDate(selectedDate);
            const updatedWorkouts = {
                ...workouts,
                [dateStr]: workouts[dateStr].filter(ex => ex.id !== exerciseId)
            };
            setWorkouts(updatedWorkouts);
            saveWorkouts(updatedWorkouts);
        };

        return (
            <div data-name="app-container">
                <Header />
                <main className="container mx-auto px-4 py-8">
                    <Calendar
                        selectedDate={selectedDate}
                        workouts={workouts}
                        onDateSelect={handleDateSelect}
                    />
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">
                            Workouts for {selectedDate.toLocaleDateString()}
                        </h2>
                        <ExerciseList
                            date={selectedDate}
                            exercises={workouts[formatDate(selectedDate)] || []}
                            onToggleComplete={handleToggleComplete}
                            onRemoveExercise={handleRemoveExercise}
                        />
                    </div>
                    <ExerciseSelector onAddExercise={handleAddExercise} />
                </main>
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
