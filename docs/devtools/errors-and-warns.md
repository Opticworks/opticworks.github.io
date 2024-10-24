---
outline: deep
---

# Errors & Warns

Inevitably you might have screwed up and come across an error. That's ok - it might be your fault but it's not the end of the world. This section will help you understand warns & errors a bit more in-depth.

Errors and warns are followed by a traceback.

## Errors

### [0] OK

A zero code to indicate that a task has completed successfully.

### [1] General Minor Failure

A minor failure that is usually followed up by a short explanation of what went wrong.

### [2] General Major Failure

A major failure that is usually followed up by a short explanation of what went wrong.

### [126] Cannot execute command

The script couldn't successfully execute a command that it has found.

### [127] Cannot find command

The script couldn't find the command that it wanted to execute.

### [128] fatal error

Something serious has happened for a subtask of VisTools.

### [9008] emergency

Something extremely serious has happened for VisTools and it has quit to avoid any damage.


## Warns

### [0] OK

A zero code to indicate that a task has completed successfully.

### [1] cullbrush not found or invalid for ...

VisTools has found an interior folder but could not find the cullBrush child inside of it. This generally means that VisTools will ignore the interior.

### [2] cullbrush not found or invalid for a missing folder

VisTools has inexplicably tried to access a cullBrush inside of a folder that doesn't exist.

### [3] LOD model not found or invalid

VisTools could not find an LOD model for an object tagged with `"Detail_Small"`.


