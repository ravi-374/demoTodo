<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Repository\TaskRepositoryInterface;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    /**
     * @var TaskRepositoryInterface
     */
    private $taskRepository;
    /**
     * @param TaskRepositoryInterface $taskRepository
     */
    public function __construct(TaskRepositoryInterface $taskRepository)
    {
        $this->taskRepository = $taskRepository;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $tasks = $this->taskRepository->all();
        $tasks = TaskResource::collection($tasks);

        return $this->sendResponse($tasks, "Tasks retrieved successfully");
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $taskCreateRequest = [
            'title' => ['required'],
            'status' => ['required'],
        ];
        $request->validate($taskCreateRequest);

        $task = $this->taskRepository->store($input);

        return $this->sendResponse($task,'Task created successfully');
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $this->taskRepository->delete($id);

        return $this->sendSuccess('Task deleted successfully');
    }

    /**
     * @param $id
     *
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function changeStatus($id)
    {
        $this->taskRepository->changeStatus($id);

        return $this->sendSuccess('Task deleted successfully');
    }
}
