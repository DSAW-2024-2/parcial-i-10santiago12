function toggleShare() 
{
    const shareOptions = document.getElementById('shareOptions');
    if (shareOptions.style.display === 'none' || shareOptions.style.display === '') {
        shareOptions.style.display = 'block';
    } else {
        shareOptions.style.display = 'none';
    }
}
