<?php

namespace App\Repository;

interface TaskRepositoryInterface
{
    /**
     * @return mixed
     */
    public function all();

    /**
     * @param $input
     * @return mixed
     */
    public function store($input);

    /**
     * @param $id
     *
     *
     * @return mixed
     */
    public function delete($id);

    /**
     * @param $id
     *
     *
     * @return mixed
     */
    public function changeStatus($id);
}
