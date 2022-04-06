<?php

namespace App\Repository;

use App\Models\Task;
class TaskRepository implements TaskRepositoryInterface
{

    /**
     * @return mixed
     */
    public function all()
    {
        $tasks = Task::get();

        return $tasks;
    }

    public function store($input)
    {
        $task = Task::create([
            'title'    => $input['title'],
            'status'   => $input['status'],
        ]);

        return $task;
    }

    /**
     * @param $id
     *
     *
     * @return bool
     */
    public function delete($id)
    {
        $task = Task::find($id);
        $task->delete();

        return true;
    }

    /**
     * @param $id
     *
     *
     * @return bool
     */
    public function changeStatus($id)
    {
        $task = Task::find($id);
        $task->update([
            'status' => !$task['status']
        ]);

        return true;
    }
}
