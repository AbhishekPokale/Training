package com.mkyong.concurrency.executor;

import java.util.List;
import java.util.ArrayList;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class ExecutorExample2Refactored {

    public static void main(String[] args) {
        ExecutorService threadPool = Executors.newCachedThreadPool();

        List<Callable<Integer>> tasks = new ArrayList<>();
        tasks.add(() -> 1);
        tasks.add(() -> 2);
        tasks.add(() -> 3);

        int total = 0;

        try {
            List<Future<Integer>> results = threadPool.invokeAll(tasks);

            // Iterate manually to sum up the results
            for (Future<Integer> result : results) {
                total += result.get();
            }

            System.out.println("Total sum is: " + total);

        } catch (InterruptedException ie) {
            System.err.println("Execution was interrupted: " + ie.getMessage());
            Thread.currentThread().interrupt();
        } catch (Exception ex) {
            System.err.println("Error retrieving result: " + ex.getMessage());
        } finally {
            threadPool.shutdown();
        }
    }
}
