function deletePanel () {
    panels.deleteOne({ id: 'large' }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });
}